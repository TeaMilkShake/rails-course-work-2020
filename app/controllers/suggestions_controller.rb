class SuggestionsController < ApplicationController
  before_action :set_suggestion, only: [:show, :edit, :update, :destroy]

  def index
      redirect_to "/error"
  end

    def new
      if session[:user_id]
          @session_client = Human.find(session[:user_id]) 
      else
          redirect_to "/error"
      end
    end


  def create
    @suggestion = Suggestion.new(suggestion_params)
    @suggestion.owner = session[:user_id]
    @suggestion.price = @suggestion.price << " $" 
    @suggestion.square = @suggestion.square << " м²" 

    @suggestion.image1.attach(params[:suggestion][:image1])
    @suggestion.image2.attach(params[:suggestion][:image2])
    @suggestion.image3.attach(params[:suggestion][:image3])

      if @suggestion.save
        redirect_to "/profile"
      end
  end

  def show
      @suggestion = Suggestion.find(params[:id])
      @suggestion_owner = Human.find(@suggestion.owner) 
      if session[:user_id]
        @session_client = Human.find(session[:user_id]) 
      end
  end

  def update
      if @suggestion.update(suggestion_params)
      
      end
  end


  def destroy
    @suggestion = Suggestion.find(params[:id])
    @suggestion.destroy
    redirect_to "/profile"
  end



    private 
    def set_suggestion
      @suggestion = Suggestion.find(params[:id])
    end
    
    def suggestion_params
      params.require(:suggestion).permit(:description, :price, :square, :city, :address, :owner, :image1, :image2, :image3, category:[], flat_type:[])
    end
end

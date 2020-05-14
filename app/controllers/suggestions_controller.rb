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
    @suggestion.priceFloat = @suggestion.price.gsub(/\s+/, "").to_f
    @suggestion.squareFloat = @suggestion.square.gsub(/\s+/, "").to_f
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


  #Edit suggestion methods
  def edit
    require 'nokogiri'
    checkboxes = Nokogiri::XML::DocumentFragment.parse <<-end
    <input type="checkbox" name="suggestion[category][]" id="suggestion_category_" value="Оренда" class="rent-input checkbox-input category-input">
    <input type="checkbox" name="suggestion[category][]" id="suggestion_category_" value="Продаж" class="sell-input checkbox-input category-input">
    end
    @rent_checkbox_hash = checkboxes.at_css('.rent-input')
    @sell_checkbox_hash = checkboxes.at_css('.sell-input')

    if session[:user_id]
      @session_client = Human.find(session[:user_id]) 
    end
  end

  def update
    @suggestion = Suggestion.find(params[:id])

    params[:suggestion][:price] = params[:suggestion][:price] << " $" 
    params[:suggestion][:square] = params[:suggestion][:square] << " м²" 

    params[:suggestion][:price] = params[:suggestion][:price].gsub(/\B(?=(\d{3})+(?!\d))/, " ")
    params[:suggestion][:square] = params[:suggestion][:square].gsub(/\B(?=(\d{3})+(?!\d))/, " ")

      if @suggestion.update(suggestion_params)
          redirect_to @suggestion
      end
  end

  #Delete suggestion
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
      params.require(:suggestion).permit(:description, :price, :square, :city, :address, :owner, :image1, :image2, :image3, :priceFloat, :squareFloat, category:[], flat_type:[])
    end
end

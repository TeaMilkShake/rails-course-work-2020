class SearchController < ApplicationController

    def search
        if session[:user_id]
          @session_client = Human.find(session[:user_id]) 
        end
      
        
    end
    def searchPost
        if session[:user_id]
            @session_client = Human.find(session[:user_id]) 
        end
        @suggestions = Suggestion.all
        @suggestions = @suggestions.where(square: params[:search][:square]) if params[:search][:square].present?
        @suggestions = @suggestions.where(city: params[:search][:city]) if params[:search][:city].present?
        @suggestions = @suggestions.where(category: params[:search][:category]) if params[:search][:category].present?
        @suggestions = @suggestions.where(flat_type: params[:search][:flat_type]) if params[:search][:flat_type].present?
    end

    private def search_params
        params.require(:search).permit(:price, :square, :city, category:[], flat_type:[])
    end
end

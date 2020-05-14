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
        if params[:search][:category].present? == false
            params[:search][:category] = ""
        end
        if params[:search][:flat_type].present? == false
            params[:search][:flat_type] = ""
        end
        @search_obj = Search.new(search_params)
        
        @suggestions = Suggestion.all
        suggestin_length = @suggestions.size()

        @priceFrom = params[:search][:priceFrom]
        @priceTo = params[:search][:priceTo]

        @squareFrom = params[:search][:squareFrom]
        @squareTo = params[:search][:squareTo]

        @suggestions = @suggestions.where("priceFloat > ?", params[:search][:priceFrom].gsub(/\s+/, "").to_f) if params[:search][:priceFrom].present?
        @suggestions = @suggestions.where("priceFloat < ?", params[:search][:priceTo].gsub(/\s+/, "").to_f) if params[:search][:priceTo].present?
        @suggestions = @suggestions.where("squareFloat > ?", params[:search][:squareFrom].gsub(/\s+/, "").to_f) if params[:search][:squareFrom].present?
        @suggestions = @suggestions.where("squareFloat < ?", params[:search][:squareTo].gsub(/\s+/, "").to_f) if params[:search][:squareTo].present?
        @suggestions = @suggestions.where(city: @search_obj.city) if params[:search][:city].present?
        @suggestions = @suggestions.where(category: @search_obj.category.gsub(/[\[\]\"]/,"")) if params[:search][:category].present?
        @suggestions = @suggestions.where(flat_type: @search_obj.flat_type.gsub(/[\[\]\"]/,"")) if params[:search][:flat_type].present?

        if(@suggestions.size() == suggestin_length)
            @suggestions = []
        end
    end

    private def search_params
        params.require(:search).permit(:price, :squareFrom, :squareTo , :priceFrom, :priceTo, :city, category:[], flat_type:[])
    end
end

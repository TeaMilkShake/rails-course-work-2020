class SearchController < ApplicationController

    def search
        if session[:user_id]
          @session_client = Human.find(session[:user_id]) 
        end
        
    end
    def searchPost
        @suggestions = Suggestion.all
        
    end

    private def search_params
        params.require(:search).permit(:price, :square, :city, category:[], flat_type:[])
    end
end

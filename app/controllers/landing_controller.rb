class LandingController < ApplicationController
    def landing
        @i = 0
        @all_suggestions = Suggestion.all()
        @all_suggestions = @all_suggestions.size()
        @suggestions = Suggestion.last(6).reverse

        if session[:user_id]
            @session_client = Human.find(session[:user_id]) 
        end
    end
end

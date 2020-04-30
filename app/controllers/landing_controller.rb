class LandingController < ApplicationController
    def landing
        @i = 0
        @suggestions = Suggestion.last(6)

        @suggestions = @suggestions.sort_by &:created_at

        if session[:user_id]
            @session_client = Human.find(session[:user_id]) 
        end
    end
end

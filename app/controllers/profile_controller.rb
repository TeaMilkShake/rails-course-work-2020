class ProfileController < ApplicationController
    def profile
        if session[:user_id]
            @session_client = Human.find(session[:user_id]) 
            @suggestions = Suggestion.where(owner: session[:user_id])
        else
            redirect_to "/error"
        end
    end
end

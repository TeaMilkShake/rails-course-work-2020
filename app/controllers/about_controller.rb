class AboutController < ApplicationController
    def about
        if session[:user_id]
            @session_client = Human.find(session[:user_id]) 
        end
    end
end

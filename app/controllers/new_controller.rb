class NewController < ApplicationController
    def new
        if session[:user_id]
            @session_client = Human.find(session[:user_id]) 
        else
            redirect_to "/error"
        end
    end

    def create

    end


    private def user_params

    end
end

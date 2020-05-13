class ErrorController < ApplicationController
    def error_not_found
        if session[:user_id]
            @session_client = Human.find(session[:user_id]) 
        end
        render(:status => 404)
    end

    def error_rejected_response
        if session[:user_id]
            @session_client = Human.find(session[:user_id]) 
        end
        render(:status => 500)
    end
end

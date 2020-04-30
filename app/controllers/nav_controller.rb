class NavController < ApplicationController
    def log_out
        reset_session
        redirect_to "http://localhost:3000/login"
    end
end

class LoginController < ApplicationController
    def login
        if session[:user_id]
            @session_client = Human.find(session[:user_id]) 
        end
    end

    def create
        @client = Human.find_by(number: login_params[:number])

        if @client && @client.authenticate(login_params[:password])
            session[:user_id] = @client.id
            redirect_to "http://localhost:3000"
        else
            redirect_to login_path, error: "Невірний пароль"
        end
    end

    def loginPhone
        @client = Human.find_by(number:  login_params[:number])
        
        if @client.nil?
            respond_to do |format|
                format.json { render :json => false }     
            end
        else
            respond_to do |format|
                format.json { render :json => true }     
            end
        end
    end

    private def login_params
        params.require(:humanLogin).permit(:number,:password)
    end
end

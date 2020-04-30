class RegisterController < ApplicationController
    def register
        if session[:user_id]
            @session_client = Human.find(session[:user_id]) 
        end
    end

    def validate
        @client = Human.find_by_email(params[:human][:email])

        
        respond_to do |format|

        format.json { render :json => !@client }
        end
    end

    def phone
        @client = Human.find_by(number: params[:human][:number])
        
        respond_to do |format|

        format.json { render :json => !@client }
        end
    end


    def create
        @client = Human.create(client_params)

        if @client.save
            session[:user_id] = @client.id
            redirect_to "http://localhost:3000/"
        end
    end

    private def client_params
        params.require(:human).permit(:name,:email,:number,:password,:password_confirmation)
    end
end

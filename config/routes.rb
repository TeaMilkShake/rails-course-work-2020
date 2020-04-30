Rails.application.routes.draw do
  resources :suggestions
  root 'landing#landing'


  #Error 404

  get 'register' => "register#register"

  get 'login' => "login#login"

  get 'about' => "about#about"

  get 'contacts' => "contacts#contacts"

  get 'profile' => "profile#profile"

  get 'error' => "error#error"

  get 'new' => "suggestions#new"



  #Register

  post 'registerSubmit' => "register#create"

  post 'validate' => "register#validate"

  post 'phone' => "register#phone"
  
  #Login

  post 'loginPhone' => 'login#loginPhone'

  post 'loginSubmit' => "login#create"

  #Log out

  get 'logOut' => 'nav#log_out'

  #New post

  post 'newPost' => 'suggestions#create'


  resources :suggestions
end

Rails.application.routes.draw do
  ActiveAdmin.routes(self)
  resources :articles
  devise_for :users
  root to: 'pages#home'
  resources :articles
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

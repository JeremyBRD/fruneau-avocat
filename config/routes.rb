Rails.application.routes.draw do
  resources :articles
  devise_for :users
  root to: 'pages#home'
  get 'domaines-expertise', to: 'pages#domaines_expertise'
  get 'cabinet', to: 'pages#cabinet'
  get 'contact', to: 'pages#contact'
  get 'mentions-legales', to: 'pages#mentions_legales'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

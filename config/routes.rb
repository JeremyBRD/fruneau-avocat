Rails.application.routes.draw do
  root to: 'pages#home'

  get 'domaines-expertise', to: 'pages#domaines_expertise'
  get 'cabinet', to: 'pages#cabinet'
  get 'contact', to: 'pages#contact'
  get 'mentions-legales', to: 'pages#mentions_legales'

  resources :contacts, only: [:new, :create]
end

Rails.application.routes.draw do
  root to: 'creates#index'
  resources :creates, only: [:new]
end

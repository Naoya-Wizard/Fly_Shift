class CreatesController < ApplicationController
    def index
    end
    def new
        @create = Create.new
    end
    def create
        binding.pry
    end
end

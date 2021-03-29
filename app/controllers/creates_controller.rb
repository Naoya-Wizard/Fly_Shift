class CreatesController < ApplicationController
    def index
    end
    def new
        @create = Create.new
    end
end

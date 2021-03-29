class CreatesController < ApplicationController
    def index
    end
    def new
        @create = Shift.new
    end
end

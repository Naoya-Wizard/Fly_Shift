class CreatesController < ApplicationController
    def index
        @shift = Create.all.order("created_at DESC")

    end
    def new
        @create = Create.new
    end
    def create
        @shift = Create.new(create_params)
        if @shift.save
            redirect_to root_path
        else
            render :new
        end
    end
    def show
        @shift = Create.find(params[:id])
    end
    private
    def create_params
        params.require(:create).permit(:month_id, :shift)
    end
    
end

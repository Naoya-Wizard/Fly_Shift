class Create < ApplicationRecord
    extend ActiveHash::Associations::ActiveRecordExtensions
    belongs_to :month

    with_options presence: true do
        validates :month
        validates :shift
    end
end

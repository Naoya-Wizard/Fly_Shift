class Shift < ActiveHash::Base
    self.data = [
        { id: 1, name: 'A' },
        { id: 2, name: 'B' },
        { id: 3, name: 'C' },
        { id: 4, name: 'D' },
        { id: 5, name: 'A(当)' },
        { id: 6, name: 'A/休' },
        { id: 7, name: '休' },
        { id: 8, name: '特休' },
        { id: 9, name: '有休' }
    ]
    include ActiveHash::Associations
    has_many :create
end
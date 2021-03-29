class Shift < ActiveHash::Base
    self.data = [
        { id: 1, name: 'A' },
        { id: 2, name: 'B' },
        { id: 3, name: 'C' },
        { id: 3, name: 'D' },
        { id: 3, name: 'A(当)' },
        { id: 3, name: 'A/休' },
        { id: 3, name: '休' },
        { id: 3, name: '特休' },
        { id: 4, name: '有休' }
    ]
    include ActiveHash::Associations
    has_many :creat
end
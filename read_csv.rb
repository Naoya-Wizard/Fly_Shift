require 'csv'
first_data = CSV.read("testshift.csv")
first_data.each do |data|
    puts data
end
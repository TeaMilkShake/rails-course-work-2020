json.extract! suggestion, :id, :description, :price, :square, :city, :address, :owner, :category, :type, :created_at, :updated_at
json.url suggestion_url(suggestion, format: :json)

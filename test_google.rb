require 'googleauth'
require 'googleauth/stores/file_token_store'
    
OOB_URI = 'urn:ietf:wg:oauth:2.0:oob'
user_id = 'naoya.f.1030@gmail.com'

client_id = Google::Auth::ClientId.from_file("client_id.json")
token_store = Google::Auth::Stores::FileTokenStore.new(file: 'google_api.yml')
scope = 'https://www.googleapis.com/auth/calendar'
authorizer = Google::Auth::UserAuthorizer.new(client_id, scope, token_store)
    
credentials = authorizer.get_credentials(user_id)
    
if credentials.nil?
   url = authorizer.get_authorization_url(base_url: OOB_URI)
   puts "ブラウザで次のURLを開き、APIを許可してください"
   puts url
   puts '応答ページに表示されるコードを入力してください'
   print 'code:' 
   code = gets
   credentials = authorizer.get_and_store_credentials_from_code(
       user_id: user_id,
       code: code,
       base_url: OOB_URI
   )
end
require 'google/apis/calendar_v3'
    
# Calendar APIを利用するためのインスタンスを作成
service = Google::Apis::CalendarV3::CalendarService.new
# 認証情報を付加
service.authorization = credentials
    
# list_calendar_lists：カレンダーリストを取得するAPIを叩く
# 返り値は、カレンダー要素の配列。eachですべてを表示している。
puts service.list_calendar_lists.items.each{|calendar| puts calendar.summary}

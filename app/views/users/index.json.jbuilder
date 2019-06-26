json.array! @users do |user|
  json.id @users.id
  json.user_name @message.user.name
end
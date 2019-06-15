
## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|Email|string|null:false,unique: true|
|password|string|null:false|
|name|string|null:false,index: true|
### Association
- has_many :members
- has_many :groups,through::members
- has_many :messages

##groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null:false,index: true|
### Association
- has_many :users,through：：members
- has_many :members
- has_many :messages

##messagesテーブル

|Column|Type|Options|
|------|----|-------|
|picture|string|
|body|text|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|
## Association
- belongs_to :user
- belongs_to :group

>>>>>>> README



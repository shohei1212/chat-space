# README
## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user

## userテーブル

|Column|Type|Options|
|------|----|-------|
|Email|string|null:false,unique: true|
|password|string|null:false|
|name|string|null:false|
### Association
- has_many :members
- has_many :groups,through::members
- has_many :messages

##groupテーブル

|Column|Type|Options|
|------|----|-------|
|group_id|integre|null:false,foreign_key:true|
### Association
- has_many :users
- has_many :members
- has_many :message

##messageテーブル

|Column|Type|Options|
|------|----|-------|
|picture|string|
|body|text|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|
## Association
- belongs_to :user
- belongs_to :group


This README would normally document whatever steps are necessary to get the
application up and running.

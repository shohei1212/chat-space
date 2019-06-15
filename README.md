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
|users_id|intger|null:false,foreign_key: true|
|Email|string|null:false,unique: true|
|password|string|null:false|
### Association
_ has_many :members
_ belongs_to :group
_ has_many :message

##groupテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integre|null:false,foreign_key:true|
|group_id|integre|null:false,foreign_key:true|
### Association
_ has_many :users
_ has_many :members
_ has_many :message

##messageテーブル

|Column|Type|Options|
|------|----|-------|
|member|string|null:false,foreign_key:true|
|group|string|null:false,foreign_key:true|
|date|datetime|null:false
|picture|text|
## Association
_ belongs_to :user
_ belongs_to :group


This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
 
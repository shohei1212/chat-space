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
_has_many :members
_belongs_to :group
_has_many :message

##groupテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integre|null:false,foreign_key:true|
|group_id|integre|null:false,foreign_key:true|
### Association
_has_many:users
_has_many:members
_has_many:message

##messageテーブル

|Column|Type|Options|
|------|----|-------|
|member|string|null:false,foreign_key:true|
|group|string|null:false,foreign_key:true|
|date|datetime|null:false
|picture|text|
## Association
_belongs_to:user
_belongs_to:group


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
 
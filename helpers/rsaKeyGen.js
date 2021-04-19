import nodeRsa from 'node-rsa'
import fs from 'fs'
import path from 'path'

const key = new nodeRsa({ b: 1024 })

const refresh_key = new nodeRsa({ b: 1024 })

const public_refresh_key = key.exportKey('public')
const private_refresh_key = key.exportKey('private')

const public_key = refresh_key.exportKey('public')
const private_key = refresh_key.exportKey('private')

fs.writeFileSync(path.join('keys', 'public.pem'), public_key)
fs.writeFileSync(path.join('keys', 'private.pem'), private_key)

fs.writeFileSync(path.join('keys', 'public_refresh.pem'), public_refresh_key)
fs.writeFileSync(path.join('keys', 'private_refresh.pem'), private_refresh_key)


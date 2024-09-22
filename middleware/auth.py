import os
import jwt

from flask import request

from .exception import APIException


class AuthMiddleware:

    @staticmethod
    def is_valid_token(self, token):
        secret = os.getenv("SECRET")
        try:
            return jwt.decode(token, secret, algorithms=["HS256"])
        except Exception as e:
            print(str(e))

    def authenticate(self):
        auth_token = request.headers.get("Authorization")

        if not auth_token or not self.is_valid_token(auth_token):
            raise APIException("Unauthorized", 401)


def required_authentication(func):

    def wrapper(*args, **kwargs):
        AuthMiddleware().authenticate()
        return func(*args, **kwargs)

    return wrapper

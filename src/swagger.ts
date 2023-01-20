export const swaggerDocument = {
  openapi: '3.0.1',
  info: {
    version: '1.0.0',
    title: 'APIs Document',
    description: 'Documentation for project',
    termsOfService: '',
    contact: {
      name: 'Okten Clients',
      email: 'example@gmail.com',
      url: '#'
    },
    license: {
      name: 'Apache 2.0',
      url: 'https://www.apache.org/licenses/LICENSE-2.0.html'
    }
  },
  "paths": {
    "/clients": {
      "get": {
        "description": "Get all clients",
        "operationId": "get-all-clients",
        "tags": [
          "Clients"
        ],
        "parameters": [
          {
            "name": "page",
            "in": "query",
            "required": true,
            "type": "string",
            "example": "1"
          },
          {
            "name": "limit",
            "in": "query",
            "required": true,
            "type": "string",
            "example": "1"
          },
        ],
        "responses": {
          "200": {
            "description": "Success response",
            "schema": {
              "type": "array",
              "items": {
                "$ref": "#/definitions/SingleClient"
              }
            }
          },
          "400": {
            "description": "Users not found",
            "schema": {
              "type": "array",
              "items": {
                "$ref": "#/definitions/ApiError"
              }
            }
          }
        }
      }
    },
    "/auth/login": {
      "post": {
        "description": "Authorize user",
        "operationId": "authorize",
        "tags": [
          "Authorize"
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": "email",
                "properties": {
                  "email": {
                    "type": "string",
                    "example": "admin@gmail.com"
                  },
                  "password": {
                    "type": "string",
                    "example": "admin"
                  }
                }
              }
            }
          },
        },
        "responses": {
          "200": {
            "description": "Success response",
            "schema": {
              "type": "object",
              "required": "email",
              "properties": {
                "accessToken": {
                  "type": "string",
                },
                "refreshToken": {
                  "type": "string",
                }
              }
            }
          },
          "400": {
            "description": "Wrong email or password",
            "schema": {
              "type": "array",
              "items": {
                "$ref": "#/definitions/ApiError"
              }
            }
          }
        }
      }
    },

  },
  "definitions": {
    "ApiError": {
      "properties": {
        "statusCode": {
          "type": "number",
          "example": 400
        },
        "message": {
          "type": "string",
          "example": "Bad request"
        }
      }
    },
    "SingleClient": {
      "properties": {
        "name": {
          "type": "string",
          "example": "Bohdan"
        },
        "surname": {
          "type": "number",
          "example": "Tcherniy"
        },
        "phone": {
          "type": "string",
          "example": "8(977) 291-25-38"
        },
        "email": {
          "type": "string",
          "example": "zep77@mail.ru"
        },
        "course": {
          "type": "string",
          "example": "FS"
        },
        "course_format": {
          "type": "string",
          "example": "static"
        },
        "course_type": {
          "type": "string",
          "example": "pro"
        },
        "status": {
          "type": "string",
          "example": "New"
        },
        "sum": {
          "type": "string",
          "example": null
        },
        "already_paid": {
          "type": "string",
          "example": null
        },
        "created_at": {
          "type": "string",
          "example": "2021-08-04T18:18:23Z"
        },
        "msg": {
          "type": "string",
          "example": null
        },
        "utm": {
          "type": "string",
          "example": "event"
        },
        "createdAt": {
          "type": "string",
          "example": "2023-01-17T20:34:48.856Z"
        },
        "updatedAt": {
          "type": "string",
          "example": "2023-01-17T20:34:48.856Z"
        },
      }
    },
  }
}
import { ApiEnum } from "../enum"

export const data = [
  {
    name: "Overview",
    id: "overview",
    children: []
  },
  {
    name: "History",
    id: "history",
    children: []
  },
  {
    name: "Statement Date",
    id: "statement_date",
    children: []
  },
  {
    name: "Error Code List",
    id: "error_code",
    children: []
  },
  {
    name: "Supported Currency List",
    id: "supported_currency",
    children: []
  },
  {
    name: "Supported Language List",
    id: "statement_language",
    children: []
  },
  {
    name: "Front-End Integration",
    id: "front_end_integration",
    children: []
  },
  {
    name: "API Integration Information",
    id: "api_integration",
    children: []
  },
  {
    name: "How to Launch the game",
    id: "how_to_launch",
    children: [
      {
        name: "Launch Game API",
        id: "launch_api",
        type: ApiEnum.POST,
      },
      {
        name: "In Game",
        id: "in_game",
        type: ApiEnum.GET,
      }
    ]
  },
  {
    name: "Function API",
    id: "function_api",
    children: [
      {
        name: "Get Player Balance",
        id: "get_player_balance",
        type: ApiEnum.POST,
      },
      {
        name: "Check Bet",
        id: "check_bet",
        type: ApiEnum.POST,
      },
      {
        name: "Place Bet",
        id: "place_bet",
        type: ApiEnum.POST,
      },
      {
        name: "Bet Settlement",
        id: "bet_settlement",
        type: ApiEnum.POST,
      },
      {
        name: "Bet Cancellation",
        id: "bet_cancellation",
        type: ApiEnum.POST,
      },
      {
        name: "*Void Bets(Already Settled)",
        id: "void_bet",
        type: ApiEnum.POST,
      },
      {
        name: "*Update Balance Event",
        id: "update_balance_event",
        type: ApiEnum.POST,
      },
      {
        name: "Bonus Bet [Optional]",
        id: "bonus_bet",
        type: ApiEnum.POST,
      },
      {
        name: "Get Bet Status(For Transfer Game)",
        id: "get_bet_status",
        type: ApiEnum.POST,
      },
    ]
  },
  {
    name: "Bet Detail",
    id: "bet_detail",
    children: [
      {
        name: "Get Bet Detail API",
        id: "get_bet_detail_api",
        type: ApiEnum.POST,
      },
      {
        name: "Bet Detail",
        id: "bet_detail_api",
        type: ApiEnum.GET,
      },
    ]
  },
  {
    name: "Promotion",
    id: "promotion",
    children: [
      {
        name: "Get Vouchers [Optional]",
        id: "get_vouchers",
        type: ApiEnum.POST,
      },
    ]
  },
  {
    name: "Consolidate Report",
    id: "consolidate_report",
    children: [
      {
        name: "Win/Loss Report API by Player",
        id: "win_loss_report_api_player",
        type: ApiEnum.POST,
      },
      {
        name: "Transaction Report API by Statement Date",
        id: "transaction_report_api_statement_date",
        type: ApiEnum.POST,
      },
      {
        name: "Win/Loss Report API by Statement Date",
        id: "win_loss_report_api_statement_date",
        type: ApiEnum.POST,
      },
    ]
  },
]

export const currency = [
  "AUD",
  "CAD",
  "CHF",
  "CNY",
  "EUR",
  "GBP",
  "HKD",
  "IDR",
  "INR",
  "JPY",
  "KRW",
  "MMK",
  "MYR",
  "NOK",
  "NZD",
  "PHP",
  "SEK",
  "SGD",
  "THB",
  "USD",
  "VND",
  "ZAR",
  "KHR",
  "SAR",
  "AED",
  "RUB",
  "BRL",
  "TRY",
  "BDT",
  "BND",
  "NIO",
  "LKR",
  "NPR",
  "LAK",
  "XAF",
  "NGN",
  "KES",
  "ZMW",
  "TZS",
  "XOF",
  "PEN",
  "TND",
  "ETB",
  "ARS",
  "DKK",
  "DOP",
  "ILS",
  "MOP",
  "MXN",
  "VEF",
  "COP",
  "IRR",
  "AMD",
  "PYG",
  "MAD",
  "BOB",
  "DZD",
  "CLP",
  "VES",
  "LRD",
  "BZD",
  "UAH",
  "KZT",
  "PLN",
  "SLL",
  "SLE",
  "kIDR",
  "kVND",
  "kMMK",
  "NAD",
  "MGA",
  "ZWD",
  "TWD",
  "BGN",
  "BYN",
  "CLP",
  "CRC",
  "CUP",
  "CZK",
  "GEL",
  "GHS",
  "HUF",
  "IQD",
  "JOD",
  "KGS",
  "KWD",
  "MDL",
  "OMR",
  "PAB",
  'PKR',
  'QAR',
  'RON',
  'RWF',
  'SOS',
  'TJS',
  'TMT',
  'UGX',
  'UZS',
  'XDR',
  'SAR',
  'UYU',
  'GMD',
  'LBP',
  'MZN',
  'KPW',
  'MXV',
  'CDF',
  'ALL',
  'BWP',
  'CUC',
  'EGP',
  'RSD',
  'BAM',
  'MNT',
  'ETBB',
  'AZN',
  'GYD',
  'TOP',
  'SRD',
]

export const errorCode = [
  {code: 0, message:	"Success"},
  {code: 400, message:	"Invalid Input"},
  {code: 401, message:	"Player Not Login"},
  {code: 402, message:	"Insufficient Balance"},
  {code: 403, message:	"Bet already exists"},
  {code: 404, message:	"Bet Was Not Found"},
  {code: 405, message:	"Api Suspended"},
  {code: 406, message:	"Over Max Winning"},
  {code: 407, message:	"Over Max Lose"},
  {code: 409, message:	"Bet Already Settled"},
  {code: 410, message:	"Bet Already Cancelled"},
  {code: 3002, message:	"Report Invalid Input"},
  {code: 3003, message:	"Report Page Not Found"},
  {code: 3004, message:	"Report GameCode Not Found"},
  {code: 9999, message:	"Internal Server Error"},
  {code: 503, message:	"Under Maintenance"},
]

export const language = [
  {name: "English",	code: "EN", iso: "EN"},
  {name: "Chinese",	code: "ZH_CN", iso: "ZH"},
  {name: "Thai",	code: "TH_TH", iso: "TH"},
  {name: "Vietnamese",	code: "VI_VN", iso: "VI"},
  {name: "Indonesian",	code: "ID_ID", iso: "ID"},
  {name: "Burmese",	code: "MY_MM", iso: "MY"},
  {name: "Hindi",	code: "HI_IN", iso: "HI"},
  {name: "Malay",	code: "MS_MY", iso: "MS"},
  {name: "Korean",	code: "KO_KR", iso: "KO"},
  {name: "Japanese",	code: "JA_JP", iso: "JA"},
  {name: "German",	code: "DE_DE", iso: "DE"},
  {name: "Spanish",	code: "ES_ES", iso: "ES"},
  {name: "French",	code: "FR_FR", iso: "FR"},
  {name: "Russian",	code: "RU_RU", iso: "RU"},
  {name: "Portuguese",	code: "PT_PT", iso: "PT"},
  {name: "Latin Spanish",	code: "ES_LA", iso: "ES"},
  {name: "Portuguese",	code: "PT_BR", iso: "PT"},
  {name: "Arabic",	code: "AR_AE", iso: "AR"},
  {name: "Bangla",	code: "BN_BD", iso: "BN"},
  {name: "Turkish",	code: "TR_TR", iso: "TR"},
  {name: "English(No Gambling Sign)",	code: "EN_SC", iso: "EN"},
  {name: "Burmese(No Gambling Sign)",	code: "MM_SC", iso: "MM"},
]

export const apiData = [
  {
    title: "How to Launch the game",
    id: "how_to_launch",
    api: [
      {
        title: "Launch Game API",
        id: "launch_api",
        type: ApiEnum.POST,
        endpoint: "/{gameUrl}/Game/LaunchGame",
        description: "Player click game from operator. It will call the Funky system, and the Funky system will call the corresponding game provider.",
        parameter: [
          {
            name: "PATH PARAMETERS",
            description: "",
            params: [
              {
                name: "gameUrl",
                type: "string",
                required: true,
                description: "Game Provider's URL.",
                restriction: [],
              }
            ]
          },
          {
            name: "HEADER PARAMETERS",
            description: "",
            params: [
              {
                name: "User-Agent",
                type: "string",
                required: true,
                description: "Operator’s identifiable name.",
                restriction: [],
              },
              {
                name: "Authentication",
                type: "string",
                required: true,
                description: "Authentication token.",
                restriction: [],
              },
              {
                name: "X-Request-ID",
                type: "string",
                required: true,
                description: "Identifier for log tracing. Please use a mixed alphanumeric string in the form of a UUID, with a length of up to 64 characters.",
                restriction: [],
              },
            ]
          },
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "currency",
                type: "string",
                required: true,
                description: "User currency (if you want to use kcurrency please contact to FunkySupport).",
                restriction: ["non-empty"],
              },
              {
                name: "fpId",
                type: "string",
                required: true,
                description: "Platform ID.",
                restriction: ["non-empty"],
              },
              {
                name: "gameCode",
                type: "string",
                required: true,
                description: "The game (by code) to be launched.",
                restriction: ["non-empty"],
              },
              {
                name: "isTestAccount",
                type: "string",
                required: true,
                description: "A flag indicates if the account is for testing or not.Default value set to false.",
                restriction: ["non-empty"],
              },
              {
                name: "language",
                type: "string",
                required: true,
                description: "The language of the player. Will return English if the specified language code is not supported or recognized.",
                restriction: ["non-empty"],
              },
              {
                name: "playerId",
                type: "string",
                required: true,
                description: "The unique ID of the player. At least 3 characters are required.",
                restriction: ["non-empty"],
              },
              {
                name: "playerIp",
                type: "string",
                required: true,
                description: "Player’s IP at the moment. This is for preventing players from betting through VPN. (Please enter the correct country’s IP for real players due to regional restrictions, API testing is not subject to this requirement)",
                restriction: ["non-empty"],
              },
              {
                name: "sessionId",
                type: "string",
                required: true,
                description: "User session from platform, the unique ID when the player launch game.",
                restriction: ["non-empty"],
              },
              {
                name: "userName",
                type: "string",
                required: true,
                description: "The name that player prefers to show in game.",
                restriction: ["non-empty"],
              },
              {
                name: "masterId",
                type: "integer",
                required: true,
                description: "Master ID.",
                restriction: [],
              },
            ]
          },
        ],
        responses: [
          {
            code: 200,
            message: "OK",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "errorCode",
                    type: "integer",
                    required: false,
                    description: "0,200",
                    restriction: [],
                  },
                  {
                    name: "errorMessage",
                    type: "string",
                    required: false,
                    description: "Error Code List.",
                    restriction: [],
                  },
                  {
                    name: "data",
                    type: "object",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: [
                      {
                        name: "gameUrl",
                        type: "string",
                        required: false,
                        description: "The destination for operator to redirect player to the game.",
                      },
                      {
                        name: "token",
                        type: "string",
                        required: false,
                        description: "The token for player to enter the game.",
                      },
                    ]
                  },
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Request samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "gameCode": "string",
              "userName": "string",
              "playerId": "string",
              "currency": "string",
              "language": "string",
              "playerIp": "string",
              "sessionId": "string",
              "isTestAccount": "string",
              "fpId": "string",
              "masterId": 0
            }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "errorCode": 0,
              "errorMessage": "string",
              "data": {
                "gameUrl": "string",
                "token": "string"
                }
              }
          },
        ]
      },
      {
        title: "In Game",
        id: "in_game",
        type: ApiEnum.GET,
        endpoint: "/gameUrlWithToken",
        description: "Redirects the player to the game according to the URL within the response sent from the game provider.",
        parameter: [
          {
            name: "PATH PARAMETERS",
            description: "",
            params: [
              {
                name: "gameUrlWithToken",
                type: "string",
                required: true,
                description: "The destination for operator to redirect player to the game.",
                restriction: [],
              }
            ]
          },
          {
            name: "QUERY PARAMETERS",
            description: "",
            params: [
              {
                name: "token",
                type: "string",
                required: true,
                description: "The token for player to enter the game.",
                restriction: [],
              },
              {
                name: "redirectUrl",
                type: "string",
                required: false,
                description: "If your site need to redirect to a specified URL, the parameter redirectUrl is necessary for overwriting the original behavior of Home/Back button e.g. close window or go to the previous page. Calling without this parameter will keep the original behavior.",
                restriction: [],
              },
            ]
          },
        ],
        responses: [
          {
            code: 200,
            message: "OK",
            parameter: []
          }
        ],
        sample: []
      },
    ]
  },
  {
    title: "Function API",
    id: "function_api",
    api: [
      {
        title: "Get Player Balance",
        id: "get_player_balance",
        type: ApiEnum.POST,
        endpoint: "/{funkyUrl}/Funky/User/GetBalance",
        description: "This API is for game providers to query the best credit for players.",
        parameter: [
          {
            name: "PATH PARAMETERS",
            description: "",
            params: [
              {
                name: "funkyUrl",
                type: "string",
                required: true,
                description: "Funky System's URL",
                restriction: [],
              }
            ]
          },
          {
            name: "HEADER PARAMETERS",
            description: "",
            params: [
              {
                name: "User-Agent",
                type: "string",
                required: true,
                description: "Operator’s identifiable name.",
                restriction: [],
              },
              {
                name: "Authentication",
                type: "string",
                required: true,
                description: "Authentication token.",
                restriction: [],
              },
              {
                name: "X-Request-ID",
                type: "string",
                required: true,
                description: "Identifier for log tracing. Please use a mixed alphanumeric string in the form of a UUID, with a length of up to 64 characters.",
                restriction: [],
              },
            ]
          },
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "fpid",
                type: "integer <int32>",
                required: true,
                description: "Platform ID.",
                restriction: [],
              },
              {
                name: "playerId",
                type: "string",
                required: true,
                description: "The unique ID of the player. At least 3 characters are required.",
                restriction: ["non-empty"],
              },
              {
                name: "sessionId",
                type: "string",
                required: true,
                description: "User session from platform, the unique ID when the player launch game.",
                restriction: ["non-empty"],
              },
            ]
          },
        ],
        responses: [
          {
            code: 200,
            message: "OK",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "errorCode",
                    type: "integer",
                    required: false,
                    description: "0,401",
                    restriction: [],
                  },
                  {
                    name: "errorMessage",
                    type: "string",
                    required: false,
                    description: "Error Code List.",
                    restriction: [],
                  },
                  {
                    name: "data",
                    type: "object",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: [
                      {
                        name: "balance",
                        type: "number <double>",
                        required: false,
                        description: "Player’s balance.",
                      },
                    ]
                  },
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Request samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "playerId": "string",
              "sessionId": "string",
              "fpid": 0
            }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "errorMessage": "string",
              "errorCode": 0,
              "data": {
              "balance": 0
              }
            }
          },
        ]
      },
      {
        title: "Check Bet",
        id: "check_bet",
        type: ApiEnum.POST,
        endpoint: "/{funkyUrl}/Funky/Bet/CheckBet",
        description: "This API is for Funky system to query the bet status from operator.",
        parameter: [
          {
            name: "PATH PARAMETERS",
            description: "",
            params: [
              {
                name: "funkyUrl",
                type: "string",
                required: true,
                description: "Funky System's URL.",
                restriction: [],
              }
            ]
          },
          {
            name: "HEADER PARAMETERS",
            description: "",
            params: [
              {
                name: "User-Agent",
                type: "string",
                required: true,
                description: "Operator’s identifiable name.",
                restriction: [],
              },
              {
                name: "Authentication",
                type: "string",
                required: true,
                description: "Authentication token.",
                restriction: [],
              },
              {
                name: "X-Request-ID",
                type: "string",
                required: true,
                description: "Identifier for log tracing. Please use a mixed alphanumeric string in the form of a UUID, with a length of up to 64 characters.",
                restriction: [],
              },
            ]
          },
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "fpid",
                type: "integer <int32>",
                required: true,
                description: "Platform ID.",
                restriction: [],
              },
              {
                name: "playerId",
                type: "string",
                required: true,
                description: "The unique ID of the player. At least 3 characters are required.",
                restriction: [],
              },
              {
                name: "refNo",
                type: "string",
                required: true,
                description: "The reference number of the bet which is always unique.",
                restriction: [],
              },
            ]
          },
        ],
        responses: [
          {
            code: 200,
            message: "OK",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "stake",
                    type: "number <double>",
                    required: false,
                    description: "Effective Stake",
                    restriction: [],
                  },
                  {
                    name: "winAmount",
                    type: "number <double>",
                    required: false,
                    description: "The amount that player wins.",
                    restriction: [],
                  },
                  {
                    name: "status",
                    type: "string",
                    required: false,
                    description: "R: Running, W: Won, L: Loss, C: Canceled, D: Draw, V: Voided",
                    restriction: [],
                  },
                  {
                    name: "statementDate",
                    type: "string",
                    required: false,
                    description: "Format: yyyy-MM-dd, statement date for settlement which includes date part only.",
                    restriction: [],
                  },
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Request samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "playerId": "string",
              "refNo": "string",
              "fpid": 0
            }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "stake": 0,
              "winAmount": 0,
              "status": "string",
              "statementDate": "string"
            }
          },
        ]
      },
      {
        title: "Place Bet",
        id: "place_bet",
        type: ApiEnum.POST,
        endpoint: "/{funkyUrl}/Funky/Bet/PlaceBet",
        description: "When a player makes a bet in a game, Funky system will send this request to operator system.",
        parameter: [
          {
            name: "PATH PARAMETERS",
            description: "",
            params: [
              {
                name: "funkyUrl",
                type: "string",
                required: true,
                description: "Funky System's URL.",
                restriction: [],
              }
            ]
          },
          {
            name: "HEADER PARAMETERS",
            description: "",
            params: [
              {
                name: "User-Agent",
                type: "string",
                required: true,
                description: "Operator’s identifiable name.",
                restriction: [],
              },
              {
                name: "Authentication",
                type: "string",
                required: true,
                description: "Authentication token.",
                restriction: [],
              },
              {
                name: "X-Request-ID",
                type: "string",
                required: true,
                description: "Identifier for log tracing. Please use a mixed alphanumeric string in the form of a UUID, with a length of up to 64 characters.",
                restriction: [],
              },
            ]
          },
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "bet",
                type: "object",
                required: true,
                description: "",
                restriction: [],
                schema: [
                  {
                    name: "gameCode",
                    type: "string",
                    required: true,
                    description: "The game (by code) to be launched.",
                  },
                  {
                    name: "refNo",
                    type: "string",
                    required: true,
                    description: "The reference number of the bet which is always unique.",
                  },
                  {
                    name: "roundId",
                    type: "string",
                    required: true,
                    description: "RoundId",
                  },
                  {
                    name: "stake",
                    type: "number <double>",
                    required: true,
                    description: "Bet amount",
                  },
                  {
                    name: "voucherId",
                    type: "string",
                    required: false,
                    description: "If player is using voucher, fill in the unique id of voucher.",
                  },
                ]
              },
              {
                name: "fpid",
                type: "integer <int32>",
                required: true,
                description: "Platform ID.",
                restriction: [],
              },
              {
                name: "playerId",
                type: "string",
                required: true,
                description: "The unique ID of the player. At least 3 characters are required.",
                restriction: [],
              },
              {
                name: "playerIp",
                type: "string",
                required: true,
                description: "Player’s IP at the moment. This is for preventing players from betting through VPN. (Please enter the correct country’s IP for real players due to regional restrictions, API testing is not subject to this requirement)",
                restriction: [],
              },
              {
                name: "sessionId",
                type: "string",
                required: true,
                description: "User session from platform, the unique ID when the player launch game.",
                restriction: [],
              },
            ]
          },
        ],
        responses: [
          {
            code: 200,
            message: "OK",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "errorCode",
                    type: "integer",
                    required: false,
                    description: "0,400,401,402,403,405,407,602",
                    restriction: [],
                  },
                  {
                    name: "errorMessage",
                    type: "string",
                    required: false,
                    description: "Error Code List.",
                    restriction: [],
                  },
                  {
                    name: "data",
                    type: "object",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: [
                      {
                        name: "balance",
                        type: "number <double>",
                        required: false,
                        description: "Player’s balance.",
                      },
                    ]
                  },
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Request samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "bet": {
                "gameCode": "string",
                "refNo": "string",
                "roundId": "string",
                "stake": 0,
                "voucherId": "string"
              },
              "playerId": "string",
              "sessionId": "string",
              "fpid": 0,
              "playerIp": "string"
            }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "errorCode": 0,
              "errorMessage": "string",
              "data": {
                "balance": 0
              }
            }
          },
        ]
      },
      {
        title: "Bet Settlement",
        id: "bet_settlement",
        type: ApiEnum.POST,
        endpoint: "/{funkyUrl}/Funky/Bet/SettleBet",
        description: "When a game is completed Funky system will send this request to the operator system to adjust the balance of the player.",
        parameter: [
          {
            name: "PATH PARAMETERS",
            description: "",
            params: [
              {
                name: "funkyUrl",
                type: "string",
                required: true,
                description: "Funky System's URL.",
                restriction: [],
              }
            ]
          },
          {
            name: "HEADER PARAMETERS",
            description: "",
            params: [
              {
                name: "User-Agent",
                type: "string",
                required: true,
                description: "Operator’s identifiable name.",
                restriction: [],
              },
              {
                name: "Authentication",
                type: "string",
                required: true,
                description: "Authentication token.",
                restriction: [],
              },
              {
                name: "X-Request-ID",
                type: "string",
                required: true,
                description: "Identifier for log tracing. Please use a mixed alphanumeric string in the form of a UUID, with a length of up to 64 characters.",
                restriction: [],
              },
            ]
          },
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "betResultReq",
                type: "object",
                required: true,
                description: "",
                restriction: [],
                schema: [
                  {
                    name: "effectiveStake",
                    type: "number <double>",
                    required: true,
                    description: "Effective stake. For some games, game result might be TIE and the stake won’t equal to effective stake. In fishing games, player might play more than the initial stake.",
                  },
                  {
                    name: "gameCode",
                    type: "string",
                    required: true,
                    description: "The game (by code) to be launched.",
                  },
                  {
                    name: "playerId",
                    type: "string",
                    required: true,
                    description: "The unique ID of the player. At least 3 characters are required.",
                  },
                  {
                    name: "stake",
                    type: "number <double>",
                    required: true,
                    description: "Bet amount",
                  },
                  {
                    name: "winAmount",
                    type: "number <double>",
                    required: true,
                    description: "The amount that player wins.",
                  },
                  {
                    name: "freeSpinMainBet",
                    type: "string",
                    required: false,
                    description: "When bet is free spin, fill in the refNo of root bet.",
                  },
                ]
              },
              {
                name: "fpid",
                type: "integer <int32>",
                required: true,
                description: "Platform ID.",
                restriction: [],
              },
              {
                name: "refNo",
                type: "string",
                required: true,
                description: "The reference number of the bet which is always unique.",
                restriction: [],
              },
              {
                name: "voucherId",
                type: "string",
                required: false,
                description: "The reference number of the bet which is always unique.",
                restriction: [],
              },
            ]
          },
        ],
        responses: [
          {
            code: 200,
            message: "OK",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "errorCode",
                    type: "integer",
                    required: false,
                    description: "0,404,409,403",
                    restriction: [],
                  },
                  {
                    name: "errorMessage",
                    type: "string",
                    required: false,
                    description: "Error Code List.",
                    restriction: [],
                  },
                  {
                    name: "data",
                    type: "object",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: [
                      {
                        name: "balance",
                        type: "number <double>",
                        required: false,
                        description: "Player’s balance.",
                      },
                      {
                        name: "playerId",
                        type: "string",
                        required: false,
                        description: "The unique ID of the player. At least 3 characters are required.",
                      },
                      {
                        name: "currency",
                        type: "string",
                        required: false,
                        description: "User currency (if you want to use kcurrency please contact to FunkySupport).",
                      },
                      {
                        name: "statementDate",
                        type: "number <double>",
                        required: false,
                        description: "Format: yyyy-MM-dd. Statement date for settlement which includes date part only.",
                      },
                    ]
                  },
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Request samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "refNo": "string",
              "betResultReq": {
                "winAmount": 0,
                "stake": 0,
                "effectiveStake": 0,
                "playerId": "string",
                "gameCode": "string",
                "freeSpinMainBet": "string"
              },
              "fpid": 0,
              "voucherId": "string"
            }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "errorCode": 0,
              "errorMessage": "string",
              "data": {
                "balance": 0,
                "playerId": "string",
                "currency": "string",
                "statementDate": "string"
              }
            }
          },
        ]
      },
      {
        title: "Bet Cancellation",
        id: "bet_cancellation",
        type: ApiEnum.POST,
        endpoint: "/{funkyUrl}/Funky/Bet/CancelBet",
        description: "If a Bet request timeout or operator system responded an error to the game provider, a CancelBet request will be sent to the operator system. Funky system will treat it as a failed bet and report to the player that his bet has been failed. Operator must handle this request once and only once and must respond to our platform. Successfully settled bets cannot be canceled through the cancel bet API.",
        parameter: [
          {
            name: "PATH PARAMETERS",
            description: "",
            params: [
              {
                name: "funkyUrl",
                type: "string",
                required: true,
                description: "Funky System's URL.",
                restriction: [],
              }
            ]
          },
          {
            name: "HEADER PARAMETERS",
            description: "",
            params: [
              {
                name: "User-Agent",
                type: "string",
                required: true,
                description: "Operator’s identifiable name.",
                restriction: [],
              },
              {
                name: "Authentication",
                type: "string",
                required: true,
                description: "Authentication token.",
                restriction: [],
              },
              {
                name: "X-Request-ID",
                type: "string",
                required: true,
                description: "Identifier for log tracing. Please use a mixed alphanumeric string in the form of a UUID, with a length of up to 64 characters.",
                restriction: [],
              },
            ]
          },
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "fpid",
                type: "integer <int32>",
                required: true,
                description: "Platform ID.",
                restriction: [],
              },
              {
                name: "playerId",
                type: "string",
                required: true,
                description: "The unique ID of the player. At least 3 characters are required.",
                restriction: [],
              },
              {
                name: "refNo",
                type: "string",
                required: true,
                description: "The reference number of the bet which is always unique.",
                restriction: [],
              },
            ]
          },
        ],
        responses: [
          {
            code: 200,
            message: "OK",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "errorCode",
                    type: "integer",
                    required: false,
                    description: "0,404,409,403",
                    restriction: [],
                  },
                  {
                    name: "errorMessage",
                    type: "string",
                    required: false,
                    description: "Error Code List.",
                    restriction: [],
                  },
                  {
                    name: "data",
                    type: "object",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: [
                      {
                        name: "refNo",
                        type: "string",
                        required: false,
                        description: "The reference number of the bet which is always unique.",
                      },
                    ]
                  },
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Request samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "playerId": "string",
              "refNo": "string",
              "fpid": 0
            }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "errorMessage": "string",
              "errorCode": 0,
              "data": {
                "refNo": "string"
              }
            }
          },
        ]
      },
      {
        title: "*Void Bets(Already Settled)",
        id: "void_bet",
        type: ApiEnum.POST,
        endpoint: "/{gameUrl}/Bet/VoidBets",
        description: "If the balance of the player needs to be adjusted after a game has completed, the Funky system will send this request to the operator system.",
        parameter: [
          {
            name: "PATH PARAMETERS",
            description: "",
            params: [
              {
                name: "gameUrl",
                type: "string",
                required: true,
                description: "Game Provider's URL.",
                restriction: [],
              }
            ]
          },
          {
            name: "HEADER PARAMETERS",
            description: "",
            params: [
              {
                name: "User-Agent",
                type: "string",
                required: true,
                description: "Operator’s identifiable name.",
                restriction: [],
              },
              {
                name: "Authentication",
                type: "string",
                required: true,
                description: "Authentication token.",
                restriction: [],
              },
              {
                name: "X-Request-ID",
                type: "string",
                required: true,
                description: "Identifier for log tracing. Please use a mixed alphanumeric string in the form of a UUID, with a length of up to 64 characters.",
                restriction: [],
              },
            ]
          },
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "fpid",
                type: "integer <int32>",
                required: true,
                description: "Platform ID.",
                restriction: [],
              },
              {
                name: "refNos",
                type: "Array of strings",
                required: true,
                description: "RefNos",
                restriction: [],
              },
            ]
          },
        ],
        responses: [
          {
            code: 200,
            message: "OK",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "errorCode",
                    type: "integer",
                    required: false,
                    description: "0,500",
                    restriction: [],
                  },
                  {
                    name: "errorMessage",
                    type: "string",
                    required: false,
                    description: "Error Code List.",
                    restriction: [],
                  },
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Request samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "fpId": 0,
              "refNos": [
                "string"
              ]
            }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "errorMessage": "string",
              "errorCode": 0
            }
          },
        ]
      },
      {
        title: "*Update Balance Event",
        id: "update_balance_event",
        type: ApiEnum.POST,
        endpoint: "/{gameUrl}/Game/Event/UpdateBalance",
        description: "This api will be requested by operator, when the player’s balance is changed. When the game provider receive the request, they should call the get balance api to update the latest balance.",
        parameter: [
          {
            name: "PATH PARAMETERS",
            description: "",
            params: [
              {
                name: "gameUrl",
                type: "string",
                required: true,
                description: "Game Provider's URL.",
                restriction: [],
              }
            ]
          },
          {
            name: "HEADER PARAMETERS",
            description: "",
            params: [
              {
                name: "User-Agent",
                type: "string",
                required: true,
                description: "Operator’s identifiable name.",
                restriction: [],
              },
              {
                name: "Authentication",
                type: "string",
                required: true,
                description: "Authentication token.",
                restriction: [],
              },
              {
                name: "X-Request-ID",
                type: "string",
                required: true,
                description: "Identifier for log tracing. Please use a mixed alphanumeric string in the form of a UUID, with a length of up to 64 characters.",
                restriction: [],
              },
            ]
          },
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "fpid",
                type: "integer <int32>",
                required: true,
                description: "Platform ID.",
                restriction: [],
              },
              {
                name: "playerId",
                type: "string",
                required: true,
                description: "The unique ID of the player. At least 3 characters are required.",
                restriction: [],
              },
            ]
          },
        ],
        responses: [
          {
            code: 200,
            message: "OK",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "errorCode",
                    type: "integer",
                    required: false,
                    description: "0,400",
                    restriction: [],
                  },
                  {
                    name: "errorMessage",
                    type: "string",
                    required: false,
                    description: "Error Code List.",
                    restriction: [],
                  },
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Request samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "playerId": "string",
              "fpid": 0
            }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "errorCode": 0,
              "errorMessage": "string"
            }
          },
        ]
      },
      {
        title: "*Update Balance Event",
        id: "update_balance_event",
        type: ApiEnum.POST,
        endpoint: "/{gameUrl}/Game/Event/UpdateBalance",
        description: "This api will be requested by operator, when the player’s balance is changed. When the game provider receive the request, they should call the get balance api to update the latest balance.",
        parameter: [
          {
            name: "PATH PARAMETERS",
            description: "",
            params: [
              {
                name: "gameUrl",
                type: "string",
                required: true,
                description: "Game Provider's URL.",
                restriction: [],
              }
            ]
          },
          {
            name: "HEADER PARAMETERS",
            description: "",
            params: [
              {
                name: "User-Agent",
                type: "string",
                required: true,
                description: "Operator’s identifiable name.",
                restriction: [],
              },
              {
                name: "Authentication",
                type: "string",
                required: true,
                description: "Authentication token.",
                restriction: [],
              },
              {
                name: "X-Request-ID",
                type: "string",
                required: true,
                description: "Identifier for log tracing. Please use a mixed alphanumeric string in the form of a UUID, with a length of up to 64 characters.",
                restriction: [],
              },
            ]
          },
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "fpid",
                type: "integer <int32>",
                required: true,
                description: "Platform ID.",
                restriction: [],
              },
              {
                name: "playerId",
                type: "string",
                required: true,
                description: "The unique ID of the player. At least 3 characters are required.",
                restriction: [],
              },
            ]
          },
        ],
        responses: [
          {
            code: 200,
            message: "OK",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "errorCode",
                    type: "integer",
                    required: false,
                    description: "0,400",
                    restriction: [],
                  },
                  {
                    name: "errorMessage",
                    type: "string",
                    required: false,
                    description: "Error Code List.",
                    restriction: [],
                  },
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Request samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "playerId": "string",
              "fpid": 0
            }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "errorCode": 0,
              "errorMessage": "string"
            }
          },
        ]
      },
      {
        title: "Bonus Bet [Optional]",
        id: "bonus_bet",
        type: ApiEnum.POST,
        endpoint: "/{funkyUrl}/Bet/BonusBet",
        description: "When a free spin game has completed, the Funky system will send this request to the operator system to adjust the balance of the player.",
        parameter: [
          {
            name: "PATH PARAMETERS",
            description: "",
            params: [
              {
                name: "funkyUrl",
                type: "string",
                required: true,
                description: "Funky System's URL.",
                restriction: [],
              }
            ]
          },
          {
            name: "HEADER PARAMETERS",
            description: "",
            params: [
              {
                name: "User-Agent",
                type: "string",
                required: true,
                description: "Operator’s identifiable name.",
                restriction: [],
              },
              {
                name: "Authentication",
                type: "string",
                required: true,
                description: "Authentication token.",
                restriction: [],
              },
              {
                name: "X-Request-ID",
                type: "string",
                required: true,
                description: "Identifier for log tracing. Please use a mixed alphanumeric string in the form of a UUID, with a length of up to 64 characters.",
                restriction: [],
              },
            ]
          },
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "bonusResultReq",
                type: "object",
                required: true,
                description: "Platform ID.",
                restriction: [],
                schema: [
                  {
                    name: "bonusRefNo",
                    type: "string",
                    required: false,
                    description: "BonusRefNo",
                  },
                  {
                    name: "bonusAmount",
                    type: "number <double>",
                    required: false,
                    description: "BonusAmount",
                  },
                  {
                    name: "playerId",
                    type: "string",
                    required: false,
                    description: "The unique ID of the player. At least 3 characters are required.",
                  },
                  {
                    name: "gameCode",
                    type: "string",
                    required: false,
                    description: "The game (by code) to be launched.",
                  },
                ]
              },
              {
                name: "currency",
                type: "string",
                required: true,
                description: "User currency (if you want to use kcurrency please contact to FunkySupport).",
                restriction: [],
              },
              {
                name: "fpId",
                type: "integer <int32>",
                required: true,
                description: "Platform ID.",
                restriction: [],
              },
              {
                name: "refNo",
                type: "string",
                required: true,
                description: "The reference number of the bet which is always unique.",
                restriction: [],
              },
              {
                name: "totalRound",
                type: "integer <int32>",
                required: false,
                description: "Total Round",
                restriction: [],
              },
            ]
          },
        ],
        responses: [
          {
            code: 200,
            message: "OK",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "errorCode",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                  },
                  {
                    name: "errorMessage",
                    type: "string",
                    required: false,
                    description: "Error Code List.",
                    restriction: [],
                  },
                  {
                    name: "data",
                    type: "object",
                    required: false,
                    description: "Error Code List.",
                    restriction: [],
                    schema: [
                      {
                        name: "errorCode",
                        type: "integer",
                        required: false,
                        description: "0",
                      },
                      {
                        name: "errorMessage",
                        type: "string",
                        required: false,
                        description: "Error Code List.",
                      },
                      {
                        name: "balance",
                        type: "number <double>",
                        required: false,
                        description: "Player’s balance.",
                      },
                      {
                        name: "playerId",
                        type: "string",
                        required: false,
                        description: "The unique ID of the player. At least 3 characters are required.",
                      },
                      {
                        name: "statementDate",
                        type: "string <date-time>",
                        required: false,
                        description: "Format: yyyy-MM-dd. Statement date for settlement which includes date part only.",
                      },
                    ]
                  },
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Request samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "refNo": "string",
              "fpId": 0,
              "currency": "string",
              "totalRound": 0,
              "bonusResultReq": {
                "bonusRefNo": "string",
                "bonusAmount": 0,
                "playerId": "string",
                "gameCode": "string"
              }
            }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "errorMessage": "string",
              "errorCode": 0,
              "data": {
                "errorCode": 0,
                "errorMessage": "string",
                "balance": 0,
                "playerId": "string",
                "statementDate": "2019-08-24T14:15:22Z"
              }
            }
          },
        ]
      },
      {
        title: "Get Bet Status(For Transfer Game)",
        id: "get_bet_status",
        type: ApiEnum.POST,
        endpoint: "/{gameUrl}/Bet/GetBetStatus",
        description: "Operator use the API to check the transfer game bet status.",
        parameter: [
          {
            name: "PATH PARAMETERS",
            description: "",
            params: [
              {
                name: "gameUrl",
                type: "string",
                required: true,
                description: "Game Provider's URL.",
                restriction: [],
              }
            ]
          },
          {
            name: "HEADER PARAMETERS",
            description: "",
            params: [
              {
                name: "User-Agent",
                type: "string",
                required: true,
                description: "Operator’s identifiable name.",
                restriction: [],
              },
              {
                name: "Authentication",
                type: "string",
                required: true,
                description: "Authentication token.",
                restriction: [],
              },
              {
                name: "X-Request-ID",
                type: "string",
                required: true,
                description: "Identifier for log tracing. Please use a mixed alphanumeric string in the form of a UUID, with a length of up to 64 characters.",
                restriction: [],
              },
            ]
          },
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "gameCode",
                type: "string",
                required: true,
                description: "Platform ID.",
                restriction: ["non-empty"],
              },
              {
                name: "refNo",
                type: "string",
                required: true,
                description: "The reference number of the bet which is always unique.",
                restriction: [],
              },
            ]
          },
        ],
        responses: [
          {
            code: 200,
            message: "OK",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "errorCode",
                    type: "integer",
                    required: false,
                    description: "0,404,3002,3004,9999",
                    restriction: [],
                  },
                  {
                    name: "errorMessage",
                    type: "string",
                    required: false,
                    description: "Error Code List.",
                    restriction: [],
                  },
                  {
                    name: "data",
                    type: "object",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: [
                      {
                        name: "refNo",
                        type: "string",
                        required: false,
                        description: "The reference number of the bet which is always unique.",
                      },
                      {
                        name: "status",
                        type: "string",
                        required: false,
                        description: "BetsInfoStatus",
                      },
                      {
                        name: "message",
                        type: "",
                        required: false,
                        description: "Message",
                      },
                      {
                        name: "statementDate",
                        type: "string",
                        required: false,
                        description: "Format: yyyy-MM-dd. Statement date for settlement which includes date part only.",
                      },
                    ]
                  },
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Request samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "gameCode": "string",
              "refNo": "string"
            }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "errorCode": 0,
              "errorMessage": "string",
              "data": {
                "refNo": "string",
                "status": "string",
                "message": "string",
                "statementDate": "string"
              }
            }
          },
        ]
      },
    ]
  },
  {
    title: "Bet Detail",
    id: "bet_detail",
    api: [
      {
        title: "Get Bet Detail API",
        id: "get_bet_detail_api",
        type: ApiEnum.POST,
        endpoint: "/{gameUrl}/Bet/GetBetDetail",
        description: "This API is for Player to get the bet detail from Funky System.",
        parameter: [
          {
            name: "PATH PARAMETERS",
            description: "",
            params: [
              {
                name: "gameUrl",
                type: "string",
                required: true,
                description: "Game Provider's URL.",
                restriction: [],
              }
            ]
          },
          {
            name: "HEADER PARAMETERS",
            description: "",
            params: [
              {
                name: "User-Agent",
                type: "string",
                required: true,
                description: "Operator’s identifiable name.",
                restriction: [],
              },
              {
                name: "Authentication",
                type: "string",
                required: true,
                description: "Authentication token.",
                restriction: [],
              },
              {
                name: "X-Request-ID",
                type: "string",
                required: true,
                description: "Identifier for log tracing. Please use a mixed alphanumeric string in the form of a UUID, with a length of up to 64 characters.",
                restriction: [],
              },
            ]
          },
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "fpid",
                type: "integer <int32>",
                required: true,
                description: "Platform ID.",
                restriction: [],
              },
              {
                name: "gameCode",
                type: "string",
                required: true,
                description: "The game (by code) to be launched.",
                restriction: [],
              },
              {
                name: "lang",
                type: "string",
                required: true,
                description: "The language of the player. Will return English if the specified language code is not supported or recognized.",
                restriction: [],
              },
              {
                name: "playerId",
                type: "string",
                required: true,
                description: "The unique ID of the player. At least 3 characters are required.",
                restriction: [],
              },
              {
                name: "refNo",
                type: "string",
                required: true,
                description: "The reference number of the bet which is always unique.",
                restriction: [],
              },
              {
                name: "sourceIp",
                type: "string",
                required: true,
                description: "The request ip",
                restriction: [],
              },
              {
                name: "location",
                type: "string",
                required: false,
                description: "The “ISO 3166 country codes” alpha-2 of request. Reference : https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes",
                restriction: [],
              },
            ]
          },
        ],
        responses: [
          {
            code: 200,
            message: "OK",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "errorCode",
                    type: "integer",
                    required: false,
                    description: "0,404",
                    restriction: [],
                  },
                  {
                    name: "errorMessage",
                    type: "string",
                    required: false,
                    description: "Error Code List.",
                    restriction: [],
                  },
                  {
                    name: "data",
                    type: "object",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: [
                      {
                        name: "url",
                        type: "string",
                        required: false,
                        description: "Url",
                      },
                    ]
                  },
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Request samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "gameCode": "string",
              "refNo": "string",
              "playerId": "string",
              "lang": "string",
              "fpId": 0,
              "sourceIp": "string",
              "location": "string"
            }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "errorMessage": "string",
              "errorCode": 0,
              "data": {
                "url": "string"
              }
            }
          },
        ]
      },
      {
        title: "Bet Detail",
        id: "bet_detail_api",
        type: ApiEnum.GET,
        endpoint: "/betDetailUrl",
        description: "The bet detail Url.",
        parameter: [
          {
            name: "PATH PARAMETERS",
            description: "",
            params: [
              {
                name: "betDetailUrl",
                type: "string",
                required: true,
                description: "The URL for the operator to redirect the player to the proper bet detail page.",
                restriction: [],
              }
            ]
          },
        ],
        responses: [
          {
            code: 200,
            message: "OK",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "errorMessage",
                    type: "string",
                    required: false,
                    description: "Error Code List.",
                    restriction: [],
                  },
                  {
                    name: "errorCode",
                    type: "integer",
                    required: false,
                    description: "0,404",
                    restriction: [],
                  },
                  {
                    name: "data",
                    type: "object",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: [
                      {
                        name: "url",
                        type: "string",
                        required: false,
                        description: "Url",
                      },
                    ]
                  },
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "errorMessage": "string",
              "errorCode": 0,
              "data": {
                "url": "string"
              }
            }
          },
        ]
      },
    ]
  },
  {
    title: "Promotion",
    id: "promotion",
    api: [
      {
        title: "Get Vouchers [Optional]",
        id: "get_vouchers",
        type: ApiEnum.POST,
        endpoint: "/{funkyUrl}/User/GetVoucher",
        description: "If you want enable voucher, please contact FunkySupport.",
        parameter: [
          {
            name: "PATH PARAMETERS",
            description: "",
            params: [
              {
                name: "funkyUrl",
                type: "string",
                required: true,
                description: "Funky System's URL",
                restriction: [],
              }
            ]
          },
          {
            name: "HEADER PARAMETERS",
            description: "",
            params: [
              {
                name: "User-Agent",
                type: "string",
                required: true,
                description: "Operator’s identifiable name.",
                restriction: [],
              },
              {
                name: "Authentication",
                type: "string",
                required: true,
                description: "Authentication token.",
                restriction: [],
              },
              {
                name: "X-Request-ID",
                type: "string",
                required: true,
                description: "Identifier for log tracing. Please use a mixed alphanumeric string in the form of a UUID, with a length of up to 64 characters.",
                restriction: [],
              },
            ]
          },
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "currency",
                type: "string",
                required: true,
                description: "User currency (if you want to use kcurrency please contact to FunkySupport).",
                restriction: [],
              },
              {
                name: "fpId",
                type: "integer <int32>",
                required: true,
                description: "Platform ID.",
                restriction: [],
              },
              {
                name: "gameCode",
                type: "string",
                required: true,
                description: "The game (by code) to be launched.",
                restriction: [],
              },
              {
                name: "playerId",
                type: "string",
                required: true,
                description: "The unique ID of the player. At least 3 characters are required.",
                restriction: [],
              },
              {
                name: "sessionId",
                type: "string",
                required: true,
                description: "User session from platform, the unique ID when the player launch game.",
                restriction: [],
              },
            ]
          },
        ],
        responses: [
          {
            code: 200,
            message: "OK",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "errorCode",
                    type: "integer",
                    required: false,
                    description: "0,401",
                    restriction: [],
                  },
                  {
                    name: "errorMessage",
                    type: "string",
                    required: false,
                    description: "Error Code List.",
                    restriction: [],
                  },
                  {
                    name: "data",
                    type: "object",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: [
                      {
                        name: "totalRemainAmount",
                        type: "number <double>",
                        required: false,
                        description: "Total Remain Amount",
                      },
                      {
                        name: "vouchers",
                        type: "Array of objects",
                        required: false,
                        description: "Vouchers",
                      },
                    ]
                  },
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Request samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "playerId": "string",
              "gameCode": "string",
              "sessionId": "string",
              "fpId": 0,
              "currency": "string"
            }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "errorCode": 0,
              "errorMessage": "string",
              "data": {
                "totalRemainAmount": 0,
                "vouchers": [
                  {
                  "voucherId": "string",
                  "fixStake": 0,
                  "effectiveDate": "2019-08-24T14:15:22Z",
                  "expireDate": "2019-08-24T14:15:22Z",
                  "freeSpin": 0,
                  "usedFreeSpin": 0,
                  "netFreeSpin": 0,
                  "gameCode": "string"
                  }
                ]
              }
            }
          },
        ]
      },
    ]
  },
  {
    title: "Consolidate Report",
    id: "consolidate_report",
    api: [
      {
        title: "Win/Loss Report API by Player",
        id: "win_loss_report_api_player",
        type: ApiEnum.POST,
        endpoint: "/{gameUrl}/Funky/Report/GetActivePlayerByGame",
        description: "Get win/loss report by GameCode, StartDate, EndDate, FpId and Page.",
        parameter: [
          {
            name: "PATH PARAMETERS",
            description: "",
            params: [
              {
                name: "gameUrl",
                type: "string",
                required: true,
                description: "Game Provider's URL.",
                restriction: [],
              }
            ]
          },
          {
            name: "HEADER PARAMETERS",
            description: "",
            params: [
              {
                name: "User-Agent",
                type: "string",
                required: true,
                description: "Operator’s identifiable name.",
                restriction: [],
              },
              {
                name: "Authentication",
                type: "string",
                required: true,
                description: "Authentication token.",
                restriction: [],
              },
              {
                name: "X-Request-ID",
                type: "string",
                required: true,
                description: "Identifier for log tracing. Please use a mixed alphanumeric string in the form of a UUID, with a length of up to 64 characters.",
                restriction: [],
              },
            ]
          },
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "endDate",
                type: "string <date-time>",
                required: true,
                description: "yyyy-MM-dd (StatementDate)",
                restriction: [],
              },
              {
                name: "fpId",
                type: "integer <int32>",
                required: true,
                description: "Platform ID.",
                restriction: [],
              },
              {
                name: "gameCode",
                type: "string",
                required: true,
                description: "The game (by code) to be launched.",
                restriction: [],
              },
              {
                name: "includeTestAccount",
                type: "boolean",
                required: true,
                description: "If true, all data should include test accounts. If false, all data should not include test accounts.",
                restriction: [],
              },
              {
                name: "page",
                type: "integer <int32>",
                required: true,
                description: "Current page.",
                restriction: [],
              },
              {
                name: "startDate",
                type: "string <date-time>",
                required: true,
                description: "yyyy-MM-dd (StatementDate)",
                restriction: [],
              },
            ]
          },
        ],
        responses: [
          {
            code: 200,
            message: "OK",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "errorCode",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                  },
                  {
                    name: "errorMessage",
                    type: "string",
                    required: false,
                    description: "Error Code List.",
                    restriction: [],
                  },
                  {
                    name: "totalPage",
                    type: "integer <int32>",
                    required: false,
                    description: "Total number of pages",
                    restriction: [],
                  },
                  {
                    name: "currentPage",
                    type: "integer <int32>",
                    required: false,
                    description: "Current page.",
                    restriction: [],
                  },
                  {
                    name: "data",
                    type: "Array of objects",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: [
                      {
                        name: "playerId",
                        type: "number <double>",
                        required: false,
                        description: "The unique ID of the player. At least 3 characters are required.",
                      },
                      {
                        name: "currency",
                        type: "string",
                        required: false,
                        description: "User currency (if you want to use kcurrency please contact to FunkySupport).",
                      },
                      {
                        name: "betCount",
                        type: "integer <int32>",
                        required: false,
                        description: "Bet Count",
                      },
                      {
                        name: "totalStake",
                        type: "number <double>",
                        required: false,
                        description: "TotalStake",
                      },
                      {
                        name: "winloss",
                        type: "number <double>",
                        required: false,
                        description: "Win/Loss = WinAmount - stake. PlayerA placed $10 to an bet option which odds was 1.95, and he wins then gets $19.5(winAmount), his winloss was $19.5-$10=$9.5. PlayerB placed $10 to an bet option which odds was 1.95, and he loss then gets $0 (winAmount), therefore the winloss of the bet is $0-$10=$-10",
                      },
                      {
                        name: "isTestAccount",
                        type: "boolean",
                        required: false,
                        description: "A flag indicates if the account is for testing or not.Default value set to false.",
                      },
                    ]
                  },
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Request samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "playerId": "string",
              "gameCode": "string",
              "sessionId": "string",
              "fpId": 0,
              "currency": "string"
            }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "errorCode": 0,
              "errorMessage": "string",
              "data": {
                "totalRemainAmount": 0,
                "vouchers": [
                  {
                  "voucherId": "string",
                  "fixStake": 0,
                  "effectiveDate": "2019-08-24T14:15:22Z",
                  "expireDate": "2019-08-24T14:15:22Z",
                  "freeSpin": 0,
                  "usedFreeSpin": 0,
                  "netFreeSpin": 0,
                  "gameCode": "string"
                  }
                ]
              }
            }
          },
        ]
      },
      {
        title: "Transaction Report API by Statement Date",
        id: "transaction_report_api_statement_date",
        type: ApiEnum.POST,
        endpoint: "/{gameUrl}/Funky/Report/GetTransactionListByStatementDate",
        description: "Get transactions by StartDate, EndDate, FpId and Page. Each page contains up to 100 records.",
        parameter: [
          {
            name: "PATH PARAMETERS",
            description: "",
            params: [
              {
                name: "gameUrl",
                type: "string",
                required: true,
                description: "Game Provider's URL.",
                restriction: [],
              }
            ]
          },
          {
            name: "HEADER PARAMETERS",
            description: "",
            params: [
              {
                name: "User-Agent",
                type: "string",
                required: true,
                description: "Operator’s identifiable name.",
                restriction: [],
              },
              {
                name: "Authentication",
                type: "string",
                required: true,
                description: "Authentication token.",
                restriction: [],
              },
              {
                name: "X-Request-ID",
                type: "string",
                required: true,
                description: "Identifier for log tracing. Please use a mixed alphanumeric string in the form of a UUID, with a length of up to 64 characters.",
                restriction: [],
              },
            ]
          },
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "endDate",
                type: "string <date-time>",
                required: true,
                description: "yyyy-MM-dd (StatementDate)",
                restriction: [],
              },
              {
                name: "fpId",
                type: "integer <int32>",
                required: true,
                description: "Platform ID.",
                restriction: [],
              },
              {
                name: "page",
                type: "integer <int32>",
                required: true,
                description: "Current page.",
                restriction: [],
              },
              {
                name: "startDate",
                type: "string <date-time>",
                required: true,
                description: "yyyy-MM-dd (StatementDate)",
                restriction: [],
              },
            ]
          },
        ],
        responses: [
          {
            code: 200,
            message: "OK",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "errorCode",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                  },
                  {
                    name: "errorMessage",
                    type: "string",
                    required: false,
                    description: "Error Code List.",
                    restriction: [],
                  },
                  {
                    name: "totalPage",
                    type: "integer <int32>",
                    required: false,
                    description: "Total number of pages",
                    restriction: [],
                  },
                  {
                    name: "currentPage",
                    type: "integer <int32>",
                    required: false,
                    description: "Current page.",
                    restriction: [],
                  },
                  {
                    name: "data",
                    type: "Array of objects",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: [
                      {
                        name: "statementDate",
                        type: "string",
                        required: false,
                        description: "Format: yyyy-MM-dd. Statement date for settlement which includes date part only.",
                      },
                      {
                        name: "fpId",
                        type: "integer <int32>",
                        required: false,
                        description: "Platform ID.",
                      },
                      {
                        name: "betCount",
                        type: "integer <int32>",
                        required: false,
                        description: "Bet Count",
                      },
                      {
                        name: "activePlayerCount",
                        type: "integer <int32>",
                        required: false,
                        description: "Distinct Player Count",
                      },
                      {
                        name: "gameCode",
                        type: "string",
                        required: false,
                        description: "The game (by code) to be launched.",
                      },
                      {
                        name: "currency",
                        type: "string",
                        required: false,
                        description: "User currency (if you want to use kcurrency please contact to FunkySupport).",
                      },
                      {
                        name: "betAmount",
                        type: "number <double>",
                        required: false,
                        description: "Bet Amount(Effective Stake,Including Bonus Game)",
                      },
                      {
                        name: "winLose",
                        type: "number <double>",
                        required: false,
                        description: "Win/Lose = Payout - Stake",
                      },
                      {
                        name: "payout",
                        type: "number <double>",
                        required: false,
                        description: "Payout",
                      },
                    ]
                  },
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Request samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "startDate": "2019-08-24T14:15:22Z",
              "endDate": "2019-08-24T14:15:22Z",
              "fpId": 0,
              "page": 0
            }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "errorCode": 0,
              "errorMessage": "string",
              "totalPage": 0,
              "currentPage": 0,
              "data": [
                {
                "statementDate": "string",
                "playerId": "string",
                "betId": "string",
                "currency": "string",
                "gameCode": "string",
                "betAmount": 0,
                "winloss": 0,
                "stake": 0,
                "payout": 0
                }
              ]
            }
          },
        ]
      },
      {
        title: "Win/Loss Report API by StatementDate",
        id: "win_loss_report_api_statement_date",
        type: ApiEnum.POST,
        endpoint: "/{gameUrl}/Funky/Report/GetConsolidateByStatementDate",
        description: "Get win/loss report by StartDate, EndDate, FpId.",
        parameter: [
          {
            name: "PATH PARAMETERS",
            description: "",
            params: [
              {
                name: "gameUrl",
                type: "string",
                required: true,
                description: "Game Provider's URL.",
                restriction: [],
              }
            ]
          },
          {
            name: "HEADER PARAMETERS",
            description: "",
            params: [
              {
                name: "User-Agent",
                type: "string",
                required: true,
                description: "Operator’s identifiable name.",
                restriction: [],
              },
              {
                name: "Authentication",
                type: "string",
                required: true,
                description: "Authentication token.",
                restriction: [],
              },
              {
                name: "X-Request-ID",
                type: "string",
                required: true,
                description: "Identifier for log tracing. Please use a mixed alphanumeric string in the form of a UUID, with a length of up to 64 characters.",
                restriction: [],
              },
            ]
          },
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "endDate",
                type: "string <date-time>",
                required: true,
                description: "yyyy-MM-dd (StatementDate)",
                restriction: [],
              },
              {
                name: "includeTestAccount",
                type: "boolean",
                required: true,
                description: "If true, all data should include test accounts. If false, all data should not include test accounts.",
                restriction: [],
              },
              {
                name: "startDate",
                type: "string <date-time>",
                required: true,
                description: "yyyy-MM-dd (StatementDate)",
                restriction: [],
              },
              {
                name: "fpId",
                type: "integer <int32>",
                required: true,
                description: "Platform ID.",
                restriction: [],
              },
            ]
          },
        ],
        responses: [
          {
            code: 200,
            message: "OK",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "errorCode",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                  },
                  {
                    name: "errorMessage",
                    type: "string",
                    required: false,
                    description: "Error Code List.",
                    restriction: [],
                  },
                  {
                    name: "data",
                    type: "Array of objects",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: [
                      {
                        name: "statementDate",
                        type: "string",
                        required: false,
                        description: "Format: yyyy-MM-dd. Statement date for settlement which includes date part only.",
                      },
                      {
                        name: "fpId",
                        type: "integer <int32>",
                        required: false,
                        description: "Platform ID.",
                      },
                      {
                        name: "betCount",
                        type: "integer <int32>",
                        required: false,
                        description: "Bet Count",
                      },
                      {
                        name: "activePlayerCount",
                        type: "integer <int32>",
                        required: false,
                        description: "Distinct Player Count",
                      },
                      {
                        name: "gameCode",
                        type: "string",
                        required: false,
                        description: "The game (by code) to be launched.",
                      },
                      {
                        name: "currency",
                        type: "string",
                        required: false,
                        description: "User currency (if you want to use kcurrency please contact to FunkySupport).",
                      },
                      {
                        name: "betAmount",
                        type: "number <double>",
                        required: false,
                        description: "Bet Amount(Effective Stake,Including Bonus Game)",
                      },
                      {
                        name: "winLose",
                        type: "number <double>",
                        required: false,
                        description: "Win/Lose = Payout - Stake",
                      },
                      {
                        name: "payout",
                        type: "number <double>",
                        required: false,
                        description: "Payout",
                      },
                    ]
                  },
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Request samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "startDate": "2019-08-24T14:15:22Z",
              "endDate": "2019-08-24T14:15:22Z",
              "fpId": 0,
              "includeTestAccount": true
            }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "errorCode": 0,
              "errorMessage": "string",
              "data": [
                {
                "statementDate": "string",
                "fpId": 0,
                "betCount": 0,
                "activePlayerCount": 0,
                "gameCode": "string",
                "currency": "string",
                "betAmount": 0,
                "winLose": 0,
                "payout": 0
                }
              ]
            }
          },
        ]
      },
    ]
  },
]
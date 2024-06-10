import { ApiEnum } from "../enum"

export const data = [
  {
    name: "Introduction",
    id: "introduction",
    children: []
  },
  {
    name: "Overview",
    id: "overview",
    children: []
  },
  {
    name: "Authentication",
    id: "authentication",
    children: []
  },
  {
    name: "Error Code List",
    id: "error_code",
    children: []
  },
  {
    name: "Change Log",
    id: "change_log",
    children: []
  },
  {
    name: "Appendix",
    id: "appendix",
    children: [
      {
        name: "Error codes reference",
        id: "error_codes_reference",
        type: ApiEnum.NONE,
      },
      {
        name: "Provider and game types",
        id: "provider_game_types",
        type: ApiEnum.NONE,
      },
      {
        name: "Pagination",
        id: "pagination",
        type: ApiEnum.NONE,
      },
      {
        name: "Language",
        id: "language",
        type: ApiEnum.NONE,
      },
      {
        name: "Date time in input and output",
        id: "date_time_input_output",
        type: ApiEnum.NONE,
      },
      {
        name: "Supported timezone",
        id: "supported_timezone",
        type: ApiEnum.NONE,
      },
      {
        name: "Mimi seamless diagram",
        id: "mimi_seamless_diagram",
        type: ApiEnum.NONE,
      },
      
    ]
  },
  {
    name: "Account",
    id: "account",
    children: [
      {
        name: "CreatePlayer",
        id: "createPlayer",
        type: ApiEnum.POST,
      },
      {
        name: "Login",
        id: "login",
        type: ApiEnum.POST,
      },
      {
        name: "RefreshToken",
        id: "refreshToken",
        type: ApiEnum.POST,
      }
    ]
  },
  {
    name: "Player",
    id: "player",
    children: [
      {
        name: "Profile",
        id: "profile",
        type: ApiEnum.POST,
      },
      {
        name: "GetBalance",
        id: "getbalance",
        type: ApiEnum.POST,
      },
      {
        name: "Deposit",
        id: "deposit",
        type: ApiEnum.POST,
      },
      {
        name: "Withdraw",
        id: "withdraw",
        type: ApiEnum.POST,
      },
      {
        name: "GetGameUrl",
        id: "getgameurl",
        type: ApiEnum.POST,
      },
      {
        name: "Logout",
        id: "logout",
        type: ApiEnum.POST,
      },
      {
        name: "Update BetlimitID for Sexy",
        id: "update_betlimitid_for_sexy",
        type: ApiEnum.POST,
      },
      {
        name: "Get pending rounds in Pragmatic Play (Optional)",
        id: "get_pending_rounds_in_pragmatic_play_(optional)",
        type: ApiEnum.POST,
      },
    ]
  },
  {
    name: "Data",
    id: "data_domain",
    children: [
      {
        name: "Transaction",
        id: "transaction",
        type: ApiEnum.POST,
      },
      {
        name: "BetList",
        id: "betlist",
        type: ApiEnum.POST,
      },
      {
        name: "BetListOfAgent",
        id: "betlistofagent",
        type: ApiEnum.POST,
      },
      {
        name: "GetGameName (optional)",
        id: "getgamename_(optional)",
        type: ApiEnum.POST,
      },
      {
        name: "Get Transaction by RefNo",
        id: "get_transaction_by_refno",
        type: ApiEnum.POST,
      },
      {
        name: "Get Transaction of Agent",
        id: "get_transaction_of_agent",
        type: ApiEnum.POST,
      },
      {
        name: "BetListPaginated",
        id: "bet_list_paginated",
        type: ApiEnum.POST,
      },
      {
        name: "GetOutStandingBets",
        id: "getoutstandingbets",
        type: ApiEnum.POST,
      },
      {
        name: "Get Sum of Balance of all players",
        id: "get_sum_of_balance_of_all_players",
        type: ApiEnum.POST,
      },
      {
        name: "BetListDetailsV3",
        id: "betlistdetailsv3",
        type: ApiEnum.POST,
      },
      {
        name: "GetGameHistoryUrl",
        id: "getgamehistoryurl",
        type: ApiEnum.POST,
      },
      {
        name: "WinloseSummarize",
        id: "winlosesummarize",
        type: ApiEnum.POST,
      },
      {
        name: "BettingHistory",
        id: "bettinghistory",
        type: ApiEnum.POST,
      },
      {
        name: "WinloseV2",
        id: "winlosev2",
        type: ApiEnum.POST,
      },
      {
        name: "WinloseAllV2",
        id: "winloseallv2",
        type: ApiEnum.POST,
      },
      {
        name: "List available game",
        id: "list_available_game",
        type: ApiEnum.GET,
      },
      {
        name: "Get Game History Url By RoundId",
        id: "getgamehistoryurlbyroundid",
        type: ApiEnum.POST,
      },
      {
        name: "MMG-OutStandingBets",
        id: "mmg_outstandingbets",
        type: ApiEnum.POST,
      },
      {
        name: "BetListDetailsV2",
        id: "betlistdetailsv2",
        type: ApiEnum.POST,
      },
    ]
  }
]

export const providerMenu = [
  {
    name: "AdvantPlay",
    id: "advantplay",
    children: [
      {
        name: "Get Balance",
        id: "get_balance_advantplay",
        type: ApiEnum.POST,
      },
      {
        name: "Place Bet",
        id: "place_bet_advantplay",
        type: ApiEnum.POST,
      },
      {
        name: "Cancel Bet",
        id: "cancel_bet_advantplay",
        type: ApiEnum.POST,
      },
      {
        name: "Settle Bet",
        id: "settle_bet_advantplay",
        type: ApiEnum.POST,
      },
    ]
  },
  {
    name: "AWC",
    id: "awc",
    children: [
      {
        name: "Get Balance",
        id: "get_balance_awc",
        type: ApiEnum.POST,
      },
      {
        name: "Place Bet",
        id: "place_bet_awc",
        type: ApiEnum.POST,
      },
      {
        name: "Cancel Bet",
        id: "cancel_bet_awc",
        type: ApiEnum.POST,
      },
      {
        name: "Settle Bet",
        id: "settle_bet_awc",
        type: ApiEnum.POST,
      },
    ]
  },
  {
    name: "MIMI",
    id: "mimi",
    children: [
      {
        name: "Get Balance",
        id: "get_balance_mimi",
        type: ApiEnum.POST,
      },
      {
        name: "Place Bet",
        id: "place_bet_mimi",
        type: ApiEnum.POST,
      },
      {
        name: "Cancel Bet",
        id: "cancel_bet_mimi",
        type: ApiEnum.POST,
      },
      {
        name: "Settle Bet",
        id: "settle_bet_mimi",
        type: ApiEnum.POST,
      },
    ]
  },
  {
    name: "JILI",
    id: "jili",
    children: [
      {
        name: "Get Balance",
        id: "get_balance_jili",
        type: ApiEnum.POST,
      },
      {
        name: "Place Bet",
        id: "place_bet_jili",
        type: ApiEnum.POST,
      },
      {
        name: "Cancel Bet",
        id: "cancel_bet_jili",
        type: ApiEnum.POST,
      },
      {
        name: "Settle Bet",
        id: "settle_bet_jili",
        type: ApiEnum.POST,
      },
    ]
  },
  {
    name: "Red Tiger",
    id: "red_tiger",
    children: [
      {
        name: "Get Balance",
        id: "get_balance_red_tiger",
        type: ApiEnum.POST,
      },
      {
        name: "Place Bet",
        id: "place_bet_red_tiger",
        type: ApiEnum.POST,
      },
      {
        name: "Cancel Bet",
        id: "cancel_bet_red_tiger",
        type: ApiEnum.POST,
      },
      {
        name: "Settle Bet",
        id: "settle_bet_red_tiger",
        type: ApiEnum.POST,
      },
    ]
  },
  {
    name: "PGSoft",
    id: "pgsoft",
    children: [
      {
        name: "Get Balance",
        id: "get_balance_pgsoft",
        type: ApiEnum.POST,
      },
      {
        name: "Place Bet",
        id: "place_bet_pgsoft",
        type: ApiEnum.POST,
      },
      {
        name: "Cancel Bet",
        id: "cancel_bet_pgsoft",
        type: ApiEnum.POST,
      },
      {
        name: "Settle Bet",
        id: "settle_bet_pgsoft",
        type: ApiEnum.POST,
      },
    ]
  },
  {
    name: "WM Live",
    id: "wm_live",
    children: [
      {
        name: "Get Balance",
        id: "get_balance_wm_live",
        type: ApiEnum.POST,
      },
      {
        name: "Place Bet",
        id: "place_bet_wm_live",
        type: ApiEnum.POST,
      },
      {
        name: "Cancel Bet",
        id: "cancel_bet_wm_live",
        type: ApiEnum.POST,
      },
      {
        name: "Settle Bet",
        id: "settle_bet_wm_live",
        type: ApiEnum.POST,
      },
    ]
  },
  {
    name: "Funky",
    id: "funky",
    children: [
      {
        name: "Get Balance",
        id: "get_balance_funky",
        type: ApiEnum.POST,
      },
      {
        name: "Place Bet",
        id: "place_bet_funky",
        type: ApiEnum.POST,
      },
      {
        name: "Cancel Bet",
        id: "cancel_bet_funky",
        type: ApiEnum.POST,
      },
      {
        name: "Settle Bet",
        id: "settle_bet_funky",
        type: ApiEnum.POST,
      },
    ]
  },
  {
    name: "Spade Gaming",
    id: "spade_gaming",
    children: [
      {
        name: "Get Balance",
        id: "get_balance_spade_gaming",
        type: ApiEnum.POST,
      },
      {
        name: "Place Bet",
        id: "place_bet_spade_gaming",
        type: ApiEnum.POST,
      },
      {
        name: "Cancel Bet",
        id: "cancel_bet_spade_gaming",
        type: ApiEnum.POST,
      },
      {
        name: "Settle Bet",
        id: "settle_bet_spade_gaming",
        type: ApiEnum.POST,
      },
    ]
  },
]

export const changeLog = [
  {version: "1.0",	changelog: (
    
    [
    "Create player",
    "Player login",
    "Refresh token",
    "Get player profile",
    "Get player account balance",
    "Deposit/withdraw money",
    "Get game URL",
    "Get list of transactions",
    "Get list of betting data from all providers",
    "Get list of betting data from certain provider",
    "Get winloss summary data from certain provider",
    "Get winloss summary data from all players in certain provider"
])
  , modifydate: "14-Aug-2019"},

{version: "1.1",	changelog:  [
  "Add more information about other providers and their game types in Appendix",
  "Update supported languages",
], modifydate: "12-Sep-2019"},

{version: "1.2",	changelog:  [
  "Add API to let player logout",
  "Add API to search bet list of an agent (across all players)",
  "Add API to get bet list and winlose of minigame (if agent registered to play minigames of Mimi)",
  "Add API to get game name from game code"

], modifydate: "24-Sep-2019"},

{version: "1.3",	changelog:  [
  "Add support to sexy baccarat of AWC in 2.5",
], modifydate: "23-Nov-2019"},

{version: "1.3.1",	changelog:  [
  "Add more providers and game types",
  "Update description for two API /data/minigamebetlist and /data/minigamewinlose",
  "Update the data type of `Amount` field in these two APIs: /player/deposit and /player/withdraw"
], modifydate: "03-Dec-2019"},

{version: "2.0",	changelog:  [
  "Add Seamless API"
], modifydate: "01-Jan-2020"},

{version: "2.0.1",	changelog:  [
  "Allow the api /data/betlistby to search by time"
], modifydate: "28-Mar-2020"},

{version: "2.0.2",	changelog:  [
  "Allow client to update betlimit of SexyBaccarat"
], modifydate: "30-Mar-2020"},

{version: "2.0.3",	changelog:  [
  "Update the api 3.1 /data/transaction, add total record to response"
], modifydate: "18-May-2020"},

{version: "2.0.4",	changelog:  [
  "Add function /data/transactionbyRefNo",
  "Add function /data/TransactionOfAgent"
], modifydate: "20-May-2020"},

{version: "2.0.5",	changelog:  [
  "Add new function: BetListPaginated (3.12)",
], modifydate: "22-May-2020"},

{version: "2.0.6",	changelog:  [
  "Add 2.8: get list pending rounds of PP (for certain player)",
], modifydate: "20-Jun-2020"},

{version: "2.0.7",	changelog:  [
  "Add new function BetListDetails (3.13)",
], modifydate: "27-Jun-2020"},

{version: "2.0.8",	changelog:  [
  "Add new function GetOutStandingBets (3.14)",
], modifydate: "03-Aug-2020"},

{version: "2.0.9",	changelog:  [
  "Update Provider List in the appendix",
  "Add new function BetListDetailsV2 (3.15) which does same thing as 3.13 but input will not require authorization code",
  "Update input for update-bet-limit-ids function to support Cockfight",
], modifydate: "14-Aug-2020"},

{version: "2.0.10",	changelog:  [
  "Add function to retrieve total balance of players of certain agent",
], modifydate: "17-Oct-2020"},

{version: "2.0.11",	changelog:  [
  "Add username parameter for GetBalance Api",
], modifydate: "20-Oct-2020"},

{version: "2.0.12",	changelog:  [
  "Update description for parameters of Seamless API",
], modifydate: "21-Oct-2020"},

{version: "2.0.13",	changelog:  [
  "Add 3.17 API get history game url",
], modifydate: "23-Oct-2020"},

{version: "2.0.14",	changelog:  [
  "Add 3.18 GetGameHistoryUrl",
  "Add 3.19 api winlose summarize",
  "Update 3.7, 3.8 to deprecated",
], modifydate: "06-April-2021"},

{version: "2.0.15",	changelog:  [
  "Add 3.20 BettingHistoryNew",
  "Add 3.21 Get player winlose (WinloseV2)",
  "Add 3.22 Get agent winlose (WinloseAllV2)",
], modifydate: "20-Jun-2021"},

{version: "2.0.16",	changelog:  [
  "Update Deposit/Withdrawal function. Add TransGuid when deposit and withdrawal (2.3, 2.4)",
  "Update refno length from 16 to 50 (3.10)",
], modifydate: "30-Jun-2021"},

{version: "2.0.17",	changelog:  [
  "Add 3.23 List available game",
], modifydate: "16-Jul-2021"},

{version: "2.0.18",	changelog:  [
  "Add 4.8 PenddingBets",
  "Add 4.9 ResendBetAndSettle",
], modifydate: "06-Aug-2021"},

{version: "3.0.0",	changelog:  [
  "Remove some unuse/old api and re index number",
  "Update 4.8, 4.9 description",
  "Add base url data https://{{data_domain}} for get data",
  "Add appendix 7 seamless sequence diagram",
  "Update time format"
], modifydate: "25-Oct-2021"},

{version: "3.0.1",	changelog:  [
  "Add 3.18 [POST] GetGameHistoryUrlByRoundId",
  "Fix format date from “yyyy-MM-ddTH:mm:ss.fffZ” to “yyyy-MM-ddTHH:mm:ss.fffZ”"
], modifydate: "29-Oct-2021"},

{version: "3.0.2",	changelog:  [
  "Update 3.18 [POST] GetGameHistoryUrlByRoundId",
], modifydate: "16-Jul-2021"},

{version: "3.0.3",	changelog:  [
  "Update Payload of 2.3",
], modifydate: "19-Jan-2022"},

{version: "3.0.4",	changelog:  [
  "Add Get mmg-outstandingbets Api",
], modifydate: "26-April-2022"},

{version: "3.0.5",	changelog:  [
  "Add Resettle Api ",
], modifydate: "08-July-2022"},

{version: "3.0.6",	changelog:  [
  "Add redirectUrl in getgameUrl Api",
], modifydate: "23-Jun-2023"},

]

export const apiData = [
  {
    title: "Account",
    id: "account",
    api: [
      {
        title: "CreatePlayer",
        id: "createPlayer",
        type: ApiEnum.POST,
        endpoint: "https://{{api_domain}}/account/createplayer",
        description: "This function is for registering a new player account in middleware system. Every player is binded to an agent. The hierarchy is => Agent -> Player. The new player's default TableLimit is following with player's agent settings.",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "ApiKey",
                type: "string",
                required: true,
                description: "The key pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema : []
              },
              {
                name: "UserName",
                type: "string",
                required: true,
                description: "Username cannot be longer than 15 chars. Only numeric and alphabet is allowed in username. Username must be unique among all users in fund provider",
                restriction: [],
                schema: []
              },
              {
                name: "AgentName",
                type: "string",
                required: true,
                description: "The Agentname pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema: []
              }
            ]
          }
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
                    name: "error",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "Success",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "{{authentication_token}}",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          },
          {
            code: 500,
            message: "InternalServer",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "string",
                    required: false,
                    description: "1 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "corresponding message",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  }
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
              "ApiKey":"{{api_key}}",
              "UserName":"username",
              "AgentName":"{{agent_name}}"

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
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            description: null,
            json: {
              error: 1,//has error if greater than 0
              message: "corresponding message",
              data: ""
            }
          }
        ]
      },

      {
        title: "Login",
        id: "login",
        type: ApiEnum.POST,
        endpoint: "https://{{api_domain}}/account/login",
        description: "Login function is used to get a login token for player who logins to middleware system. The token is binded to this login session and it will be expired in 30 minutes. To obtain new token before it gets expired, consider using RefreshToken function or Login function again. Player is required to carry this token to visit our website for authentication.",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "ApiKey",
                type: "string",
                required: true,
                description: "The key pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema: []
              },
              {
                name: "UserName",
                type: "string",
                required: true,
                description: "Username cannot be longer than 15 chars. Only numeric and alphabet is allowed in username. Username must be unique among all users in fund provider",
                restriction: [],
                schema: []
              },
              {
                name: "AgentName",
                type: "string",
                required: true,
                description: "The Agentname pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema: []
              }
            ]
          }
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
                    name: "error",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "Success",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "{{authentication_token}}",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          },
          {
            code: 500,
            message: "InternalServer",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "string",
                    required: false,
                    description: "1 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "corresponding message",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  }
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
              "ApiKey":"{{api_key}}",
              "UserName":"username",
              "AgentName":"{{agent_name}}"

            }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            description: null,
            json: {
              error: 0,
              message: "Success",
              data: "{{authentication_token}}"
            }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            description: null,
            json: {
              error: 1,//has error if greater than 0
              message: "corresponding message",
              data: ""
            }
          }
        ]
      },

      {
        title: "RefreshToken",
        id: "refreshToken",
        type: ApiEnum.POST,
        endpoint: "https://{{api_domain}}/account/refreshtoken",
        description: "This function is used to get a new token for players who have already got authentication token earlier. This function will invalidate the old token as well.",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "UserName",
                type: "string",
                required: true,
                description: "Username of the player",
                restriction: [],
                schema: []
              }
            ]
          }
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
                      name: "error",
                      type: "integer",
                      required: false,
                      description: "0",
                      restriction: [],
                      schema: []
                    },
                    {
                      name: "message",
                      type: "string",
                      required: false,
                      description: "Success",
                      restriction: [],
                      schema: []
                    },
                    {
                      name: "data",
                      type: "string",
                      required: false,
                      description: "",
                      restriction: [],
                      schema: [
                        {
                          name: "UserId",
                          type: "integer",
                          required: false,
                          description: "123"
                        },
                        {
                          name: "UserName",
                          type: "string",
                          required: false,
                          description: "username"
                        },
                        {
                          name: "DisplayName",
                          type: "string",
                          required: false,
                          description: "name"
                        },
                        {
                          name: "Balance",
                          type: "number",
                          required: false,
                          description: "10.00"
                        },
                        {
                          name: "VipPoint",
                          type: "integer",
                          required: false,
                          description: "10"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
          {
            code: 500,
            message: "InternalServer",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "string",
                    required: false,
                    description: "1 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "corresponding message",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  }
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
            description: null,
            json: {
              error: 0,
              message: "Success",
              data: "{{authentication_token}}"
            }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            description: null,
            json: {
              error: 1, //has error if greater than 0
              message: "corresponding message",
              data: ""
            }
          }
        ]
      }
    ]
  },

  {
    title: "Player",
    id: "player",
    api: [
      {
        title: "Profile",
        id: "profile",
        type: ApiEnum.POST,
        endpoint: "https://{{api_domain}}/player/profile",
        description: "This function returns the profile information of a player. ",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "UserName",
                type: "string",
                required: true,
                description: "Username of the player",
                restriction: [],
                schema: []
              }
            ]
          }
        ],
        responses: [
          {
            code: 200,
            message: "OK",
            parameter:  [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "Success",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: [
                      {
                        name: "UserId",
                        type: "integer",
                        required: false,
                        description: "123"
                      },
                      {
                        name: "UserName",
                        type: "string",
                        required: false,
                        description: "username"
                      },
                      {
                        name: "DisplayName",
                        type: "string",
                        required: false,
                        description: "name"
                      },
                      {
                        name: "Balance",
                        type: "number",
                        required: false,
                        description: "10.00"
                      },
                      {
                        name: "VipPoint",
                        type: "integer",
                        required: false,
                        description: "10"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            code: 500,
            message: "InternalServer",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "string",
                    required: false,
                    description: "1 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "corresponding message",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  }
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
              "UserName":"username"
            }
          },
          {
            name: "Request samples",
            payload: "200",
            contentType: "application/json",
            json: {
              error: 0,
              message: "Success",
              data: { 
                "UserId": "123",
                "UserName": "username",
                "DisplayName": "name",
                "Balance" : 10.00,
                "VipPoint": 10
              }
            }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              error : 1, //has error if greater than 0
              message: "corresponding message",
              data: ""
              }
            }
        ]
      },
      {
        title: "GetBalance",
        id: "getbalance",
        type: ApiEnum.POST,
        endpoint: "https://{{api_domain}}/player/getbalance",
        description: "",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "UserName",
                type: "string",
                required: true,
                description: "Username of the player",
                restriction: [],
                schema: []
              }
            ]
          }
        ],
        responses: [
          {
            code: 200,
            message: "Success",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "Success",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: [
                      {
                        name: "Balance",
                        type: "number",
                        required: false,
                        description: "10.00"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            code: 500,
            message: "InternalServer",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "string",
                    required: false,
                    description: "1 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "corresponding message",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  }
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
              "UserName":"username"
            }
          },
          {
            name: "Request samples",
            payload: "200",
            contentType: "application/json",
            json: {
              error: 0,
              message: "Success",
              data: {
                "Balance": 10.00
              }
            }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              error : 1, //has error if greater than 0
              message: "corresponding message",
              data: ""
              }
            }
        ]
      },
      {
        title: "Deposit",
        id: "deposit",
        type: ApiEnum.POST,
        endpoint: "https://{{api_domain}}/player/deposit",
        description: "",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "UserName",
                type: "string",
                required: true,
                description: "Username of the player",
                restriction: [],
                schema: []
              },
              {
                name: "Amount",
                type: "string",
                required: true,
                description: "The amount of money to be used for deposit to the specified player. It is a decimal number in format of a string.",
                restriction: [],
                schema: []
              },
              {
                name: "TransGuid",
                type: "string",
                required: false,
                description: "Your unique transguid, TransGuid must have less or equal than 50 characters and only contain \"a-z\", \"0-9\", \"-\"",
                restriction: [],
                schema: []
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
                    name: "error",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "Success",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: [
                      {
                        name: "Balance",
                        type: "string",
                        required: false,
                        description: "1000.00 // This balance is the balance after the deposit"
                      },
                      {
                        name: "TransGuid",
                        type: "string",
                        required: false,
                        description: "somecode"
                      }
                    ]
                  }
                ]
              },
              
            ]
          },
          {
            code: 500,
            message: "InternalServer",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "string",
                    required: false,
                    description: "1 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "corresponding message",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  }
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
              "UserName":"username",
              "Amount": 1000.6,
              "TransGuid": "<Your TransGuid>"
            }
          },
          {
            name: "Response sample",
            payload: "200",
            contentType: "application/json",
            json: {
              error: 0,
              message:"Success",
              data: {
                "Balance": 1000.00, // This balance is the balance after the deposit
                "TransGuid": "somecode"
              }
            }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              error : 1, //has error if greater than 0
              message: "corresponding message",
              data: ""
              }
            },
        ]
      },
      {
        title: "Withdraw",
        id: "withdraw",
        type: ApiEnum.POST,
        endpoint: "https://{{api_domain}}/player/withdraw",
        description: "",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "UserName",
                type: "string",
                required: true,
                description: "Username of the player",
                restriction: [],
                schema: []
              },
              {
                name: "Amount",
                type: "string",
                required: true,
                description: "The amount of money to be used for withdrawal from the specified player. It is a decimal number in format of a string.",
                restriction: [],
                schema: []
              },
              {
                name: "TransGuid",
                type: "string",
                required: false,
                description: "Your unique transguid, TransGuid must have less or equal than 50 characters and only contain \"a-z\", \"0-9\", \"-\"",
                restriction: [],
                schema: []
              }
            ]
          }
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
                    name: "error",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "Success",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: [
                      {
                        name: "Balance",
                        type: "string",
                        required: false,
                        description: "900.00 // This balance is the balance after the withdrawal"
                      },
                      {
                        name: "TransGuid",
                        type: "string",
                        required: false,
                        description: "<Your TransGuid>"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            code: 500,
            message: "InternalServer",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "string",
                    required: false,
                    description: "1 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "corresponding message",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  }
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
              "UserName":"username",
              "Amount": 100.5,
              "TransGuid": "<Your TransGuid>"
            }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "Success",
              "data": {
                  "Balance": 900.00, // This balance is the balance after the withdrawal
                  "TransGuid": "<Your TransGuid>"
              }
            }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": "corresponding message",
              "data": ""

            }
          }
        ]
      },
      {
        title: "GetGameUrl",
        id: "getgameurl",
        type: ApiEnum.POST,
        endpoint: "https://{{api_domain}}/player/getgameurl",
        description: "Get the game URL of provider to let player play that game.",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "GameType",
                type: "string",
                required: true,
                description: "The game type, each provider has a set of available game types",
                restriction: [],
                schema: []
              },
              {
                name: "GameId",
                type: "string",
                required: false,
                description: "In some game types of some providers, this field will be required. Request technical team for your concrete game id list.",
                restriction: [],
                schema: []
              },
              {
                name: "ProviderId",
                type: "string",
                required: true,
                description: "Available values: -	“0”: this will navigate players to game lobby -	“2”: SBO -	“3”: AG -	“4”: PragmaticPlay More details in the Appendix",
                restriction: [],
                schema: []
              },
              {
                name: "Language",
                type: "string",
                required: true,
                description: "See Appendix"
              },
              {
                name: "Platform",
                type: "string",
                required: true,
                description: "D: Desktop, M: Mobile"
              },
              {
                name: "BetLimitIds",
                type: "Array of integers",
                required: false,
                description: "This field is optional and dedicated to SexyBaccarat of AWC.If this field presents, please make sure to enter from 1 to 3 bet limit ids. For the available bet limit ids, please refer to the attached excel file (ask our technical team)"
              },
              {
                name: "Language",
                type: "string",
                required: true,
                description: "The parameter RedirectUrl is necessary for overwriting the original behavior of Close game button."
              },
            ]
          }
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
                    name: "error",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "Success",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "http://the-link.url",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          },
          {
            code: 500,
            message: "InternalServer",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "string",
                    required: false,
                    description: "1 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "corresponding message",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  }
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
              "GameType":"Games",
              "GameId":"1",
              "ProviderId": "3",
              "Language":"en-us",
              "Platform":"D",
              "BetLimitIds": [280105]

            }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "Success",
              "data": "http://the-link.url"
            }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": "corresponding message",
              "data": ""
            }
          }
        ]
      },
      {
        title: "Logout",
        id: "logout",
        type: ApiEnum.POST,
        endpoint: "https://{{api_domain}}/player/logout",
        description: "Logout Mimi system, and close all game sessions.",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: []
          }
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
                    name: "error",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "Success",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          },
          {
            code: 500,
            message: "InternalServer",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "string",
                    required: false,
                    description: "5 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "Invalid Authorization Token.",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Request samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "Success",
              "data": ""
            }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 5, //has error if greater than 0
              "message": "Invalid Authorization Token.",
              "data": ""
            }
          },
        ]
      },
      {
        title: "Update BetlimitID for Sexy",
        id: "update_betlimitid_for_sexy",
        type: ApiEnum.POST,
        endpoint: "https://{{api_domain}}/player/update-bet-limit-ids",
        description: "Update betlimitids for existing players. Applied for Sexy Baccarat. Please refer to the attached excel to know more about the available ID to send.",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: []
          }
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
                    name: "error",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "Success",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          },
          {
            code: 500,
            message: "InternalServer",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "string",
                    required: false,
                    description: "5 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "Invalid Authorization Token.",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  }
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
              "Ids": [112,223],
              "CfMinBet": 1,
              "CfMaxBet": 100,
              "CfMinDraw": 1,
              "CfMaxDraw": 100,
              "CfMaxMatch": 200
            }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "Success",
              "data": ""
            }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 5, //has error if greater than 0
              "message": "Invalid Authorization Token.",
              "data": ""
            }
          }
        ]
      },
      {
        title: "Get pending rounds in Pragmatic Play (Optional)",
        id: "get_pending_rounds_in_pragmatic_play_(optional)",
        type: ApiEnum.GET,
        endpoint: "https://{{api_domain}}/player/get-pending-pp-rounds",
        description: "Sometimes when player purchase freespin of some slot game of Pragmatic Play, the round will be in the “pending” state until the player spin all the freespin. This API will return all those pending rounds.",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: []
          }
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
                    name: "error",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "Success",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          },
          {
            code: 500,
            message: "InternalServer",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "string",
                    required: false,
                    description: "5 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "Invalid Authorization Token.",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Request samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "Success",
              "data": [
                  {
                      "betTime": "2020-06-20T09:46:39.167Z",
                      "gameId": "vs20fruitsw",
                      "playSessionID": "2361357885",
                      "betAmount": "6000.0"
                  }
              ]
            }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 5, //has error if greater than 0
              "message": "Invalid Authorization Token.",
              "data": []
            }
          },
        ]
      }
    ]
  },

  {
    title: "Data (https://{{data_domain}})",
    id: "data_domain",
    api: [
      {
        title: "Transaction",
        id: "transaction",
        type: ApiEnum.POST,
        endpoint: "https://{{data_domain}}/data/transaction",
        description: "Get the transaction list of the specified player in the specified date range.",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "FromDate",
                type: "string",
                required: true,
                description: "This is a string that represents a date. The format is “YYYY-MM-DD HH:mm:ss”.",
                restriction: [],
                schema: []
              },
              {
                name: "ToDate",
                type: "string",
                required: true,
                description: "This is a string that represents a date. The format is “YYYY-MM-DD HH:mm:ss”",
                restriction: [],
                schema: []
              },
              {
                name: "PageIndex",
                type: "integer",
                required: true,
                description: "This integer denotes the page index that you want to get bet list. Starting with 1.",
                restriction: [],
                schema: []
              },
              {
                name: "PageSize",
                type: "integer",
                required: false,
                description: "This value will limit the result of the response. It is optional. If not present, default value for PageSize is 100.",
                restriction: [],
                schema: []
              },
              {
                name: "Type",
                type: "string",
                required: true,
                description: "The type of transactions you want to get. It can take these values: “deposit”, “withdraw” and “all” to get respective result.",
                restriction: [],
                schema: []
              }
            ]
          }
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
                    name: "error",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: [
                      {
                        name: "Count",
                        type: "integer",
                        required: false,
                        description: "250"
                      },
                      {
                        name: "Entities",
                        type: "string",
                        required: false,
                        description: ""
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            code: 500,
            message: "InternalServer",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "string",
                    required: false,
                    description: "1 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "corresponding message",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  }
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
              "FromDate":"2019-08-01 00:00:00",
              "ToDate":"2019-08-30 00:00:00",
              "PageIndex": 1,
              "PageSize": 10,
              "Type": "deposit"
            }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "",
              "data": {
              "Count": 250,
              "Entities":[
                    {
                      "Id": 81,
                  "Type": "Withdraw",
                      "CreateDate": "2019-08-14T08:23:19Z",
                      "StartAmount": 1000.00, // The balance before the withdrawal
                      "AmountChange": 100.00, // The amount to be withdrawn
                      "EndAmount": 900.00, // The balance after the withdrawal
                      "TransGuid": "5235235"
                    },
                    {
                      "Id": 80,
                      "Type": "Deposit",
                      "CreateDate": "2019-08-14T08:19:33Z",
                      "StartAmount": 0.00, // The balance before the deposit
                      "AmountChange": 1000.00, // The amount to be deposited
                      "EndAmount": 1000.00, // The balance after the deposit
                      "TransGuid": "5252523"
                    }
                ]
                }
            }
          },
          {
            name: "Request samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": "corresponding message",
              "data": ""
            }
          },
        ]
      },
      {
        title: "BetList",
        id: "betlist",
        type: ApiEnum.POST,
        endpoint: "https://{{data_domain}}/data/betlist",
        description: "Get the list of bets that the specified player made in the specified date range.",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "FromDate",
                type: "string",
                required: true,
                description: "This is a string that represents a date. The format is “YYYY-MM-DD HH:mm:ss”.",
                restriction: [],
                schema: []
              },
              {
                name: "ToDate",
                type: "string",
                required: true,
                description: "This is a string that represents a date. The format is “YYYY-MM-DD HH:mm:ss”",
                restriction: [],
                schema: []
              },
              {
                name: "PageIndex",
                type: "integer",
                required: true,
                description: "This integer denotes the page index that you want to get bet list. Starting with 1.",
                restriction: [],
                schema: []
              },
              {
                name: "PageSize",
                type: "integer",
                required: false,
                description: "This value will limit the result of the response. It is optional. If not present, default value for PageSize is 100.",
                restriction: [],
                schema: []
              }
            ]
          }
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
                    name: "error",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          },
          {
            code: 500,
            message: "InternalServer",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "string",
                    required: false,
                    description: "1 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "corresponding message",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Response samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "FromDate":"2019-08-01 00:00:00",
              "ToDate":"2019-08-30 00:00:00",
              "PageIndex": 1,
              "PageSize": 10
              }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "",
              "data": [
                  {
                      "UserName": "username",
                      "TransGuid": "11111111",
                      "ActualStake": 19.60,
                      "WinLost": 39.60,
                      "Profit": 20.00,
                      "StartAmount": 664.50,
                      "BetDate": "2019-08-13T16:44:17Z",
                      "GameType": "SportsBook",
                      "GameId": null,
                      "ProductType": null,
                      "TableName": null,
                      "Status": "Settled",
                      "ProviderStatus": "won",
                      "ProviderId": 2,
                      "Provider": "SBO"
                  }
              ]
              }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": "corresponding message",
              "data": ""
              }
          }
        ]
      },
      {
        title: "BetListBy",
        id: "betlistby",
        type: ApiEnum.POST,
        endpoint: "https://{{data_domain}}/data/betlistby",
        description: "Like the BetList function, but this function limits the result to the specified provider only. The result will be sorted by the settled time.",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "FromDate",
                type: "string",
                required: true,
                description: "This is a string that represents a date. The format is “YYYY-MM-DD HH:mm:ss”.",
                restriction: [],
                schema: []
              },
              {
                name: "ToDate",
                type: "string",
                required: true,
                description: "This is a string that represents a date. The format is “YYYY-MM-DD HH:mm:ss”",
                restriction: [],
                schema: []
              },
              {
                name: "ProviderId",
                type: "integer",
                required: true,
                description: "The provider-id. So, the result will be limited to this provider only.",
                restriction: [],
                schema: []
              },
              {
                name: "PageIndex",
                type: "integer",
                required: true,
                description: "This integer denotes the page index that you want to get bet list. Starting with 1.",
                restriction: [],
                schema: []
              },
              {
                name: "PageSize",
                type: "integer",
                required: false,
                description: "This value will limit the result of the response. It is optional. If not present, default value for PageSize is 100.",
                restriction: [],
                schema: []
              },
              {
                name: "TimeSpecific",
                type: "boolean",
                required: false,
                description: "By default, this field will have the value `false`. When this field is `true`, we will consider limiting the result to the specific time in `FromDate` and `ToDate`",
                restriction: [],
                schema: []
              }
            ]
          }
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
                    name: "error",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          },
          {
            code: 500,
            message: "InternalServer",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "string",
                    required: false,
                    description: "1 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "corresponding message",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Response samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "FromDate":"2019-08-01 00:00:00",
              "ToDate":"2019-08-30 00:00:00",
              "ProviderId": 3,
              "PageIndex": 1,
              "PageSize": 10,
              "TimeSpecific": true
              }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "",
              "data": [
                  {
                      "UserName": "username",
                      "TransGuid": "11111111",
                      "ActualStake": 19.60,
                      "WinLost": 39.60,
                      "Profit": 20.00,
                      "StartAmount": 664.50,
                      "BetDate": "2019-08-13T16:44:17.000Z",
                      "GameType": "Slot",
                      "GameId": null,
                      "ProductType": null,
                      "TableName": null,
                      "Status": "Settled",
                      "ProviderStatus": "won",
                      "ProviderId": 3,
                      "Provider": "AG"
                  }
              ]
            }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": "corresponding message",
              "data": ""
              }
          }
        ]
      },
      {
        title: "BetListOfAgent",
        id: "betlistofagent",
        type: ApiEnum.POST,
        endpoint: "https://{{data_domain}}/data/betlistofagent",
        description: "Get list of bets of all players of this agent depends on the input.",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "ApiKey",
                type: "string",
                required: true,
                description: "The key pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema: []
              },
              {
                name: "AgentName",
                type: "string",
                required: true,
                description: "The Agentname pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema: []
              },
              {
                name: "FromDate",
                type: "string",
                required: true,
                description: "This is a string that represents a date. The format is “YYYY-MM-DD HH:mm:ss”.",
                restriction: [],
                schema: []
              },
              {
                name: "ToDate",
                type: "string",
                required: true,
                description: "This is a string that represents a date. The format is “YYYY-MM-DD HH:mm:ss”",
                restriction: [],
                schema: []
              },
              {
                name: "ProviderId",
                type: "integer",
                required: true,
                description: "The provider-id. So, the result will be limited to this provider only. If you set ProviderId = 0 here, it means you will get data of all providers.",
                restriction: [],
                schema: []
              },
              {
                name: "pageIndex",
                type: "integer",
                required: true,
                description: "This integer denotes the page index that you want to get bet list. Starting with 1.",
                restriction: [],
                schema: []
              },
              {
                name: "PageSize",
                type: "integer",
                required: false,
                description: "This value will limit the result of the response. It is optional. If not present, default value for PageSize is 100.",
                restriction: [],
                schema: []
              },
              {
                name: "TimeSpecific",
                type: "boolean",
                required: false,
                description: "By default, this field will have the value `false`. When this field is `true`, we will consider limiting the result to the specific time in `FromDate` and `ToDate`",
                restriction: [],
                schema: []
              }
            ]
          }
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
                    name: "error",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: [
                      {
                        name: "Count",
                        type: "string",
                        required: false,
                        description: "250 // Total of records that satisfied the request you can use"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            code: 500,
            message: "InternalServer",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "string",
                    required: false,
                    description: "1 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "corresponding message",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Response samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "ApiKey":"{{api_key}}",
              "AgentName":"{{agent_name}}",
              "FromDate":"2019-08-01 00:00:00",
              "ToDate":"2019-08-30 00:00:00",
              "PageIndex": 1,
              "PageSize": 20,
              "ProviderId": 2,
              "TimeSpecific": true
            
              }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "",
              "data": {
            "Count": 250, // Total of records that satisfied the request, you can use
                // this figure to count total page
            "Entities": [
                {
                          "UserName": "username",
                          "TransGuid": "B00179411774",
                          "Stake": 10.00,
                          "ActualStake": 10.00,
                          "WinLost": 0.00,
                          "Profit": -10.00,
                          "StartAmount": 10062.84,
                          "WinLoseDate": "2019-09-19T10:54:50.337",
                          "BetDate":"2019-09-19T10:54:51.237",
                          "GameType": "Casino",
                          "GameName": "Name",
                          "GameId": "55555",
                          "ProductType": "type",
                          "TableName": "table name",
                          "Status": "Settled",
                          "ProviderStatus": "Lose",
                          "ProviderId": 2,
                          "Provider": "SBO_BetFun"
                      }
            ]
              }
          }
          
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": "corresponding message",
              "data": ""
              }
          }
        ]
      },
      {
        title: "GetGameName (optional)",
        id: "getgamename_(optional)",
        type: ApiEnum.POST,
        endpoint: "https://{{data_domain}}/data/getgamename",
        description: "",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "ProviderId",
                type: "integer",
                required: true,
                description: "The ProviderId ",
                restriction: [],
                schema: []
              },
              {
                name: "Code",
                type: "string",
                required: true,
                description: "Code of the game.",
                restriction: [],
                schema: []
              }
            ]
          }
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
                    name: "error",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "Dragon Kingdom",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          },
          {
            code: 500,
            message: "InternalServer",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "string",
                    required: false,
                    description: "1 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "corresponding message",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Response samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "ProviderId": 4,
              "Code": "vs25dragonkingdom"
              }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "",
              "data": "Dragon Kingdom"
              }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": "corresponding message",
              "data": ""
              }
          }
        ]
      },
      {
        title: "Get Transaction by RefNo",
        id: "get_transaction_by_refno",
        type: ApiEnum.POST,
        endpoint: "https://{{data_domain}}/data/ TransactionByRefNo",
        description: "",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "ApiKey",
                type: "string",
                required: true,
                description: "The key pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema: []
              },
              {
                name: "AgentName",
                type: "string",
                required: true,
                description: "The Agentname pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema: []
              },
              {
                name: "RefNo",
                type: "string",
                required: true,
                description: "Received from deposit/withdrawal transfer.",
                restriction: [],
                schema: []
              }
            ]
          }
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
                    name: "error",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          },
          {
            code: 500,
            message: "InternalServer",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "string",
                    required: false,
                    description: "1 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: " Agent Name is not found",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Response samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "RefNo": "7ud6tjn1x643c1hy",
              "AgentName": "AGN",
              "ApiKey": "aaaappppiiiikkkkeeeeyyyy"
              }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "Id": 1908,
              "Type": "Withdraw",
              "CreateDate": "2020-03-11T16:32:19.000Z",
              "StartAmount": 4000.00,
              "AmountChange": 1.00,
              "EndAmount": 3999.00,
              "TransGuid": "7ud6tjn1x643c1hy",
              "AgentName": "AGN",
              "UserName": "usrname",
              "Note": "usrname transfer to AGN"
              }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": " Agent Name is not found",
              "data": ""
              }
          }
        ]
      },
      {
        title: "Get Transaction of Agent",
        id: "get_transaction_of_agent",
        type: ApiEnum.POST,
        endpoint: "https://{{data_domain}}/data/ TransactionOfAgent",
        description: "",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "AgentName",
                type: "string",
                required: true,
                description: "The agent name we provided",
                restriction: [],
                schema: []
              },
              {
                name: "ApiKey",
                type: "string",
                required: true,
                description: "ApiKey of the agent",
                restriction: [],
                schema: []
              },
              {
                name: "ToDate",
                type: "string",
                required: true,
                description: "The `ToDate` in string format “yyyy-MM-dd hh:mm:ss” (will be considered as in GMT+0)",
                restriction: [],
                schema: []
              },
              {
                name: "FromDate",
                type: "string",
                required: true,
                description: "The `FromDate` in string format “yyyy-MM-dd hh:mm:ss” (will be considered as in GMT+0)",
                restriction: [],
                schema: []
              },
              {
                name: "PageIndex",
                type: "integer",
                required: true,
                description: "Default is 1",
                restriction: [],
                schema: []
              },
              {
                name: "PageSize",
                type: "integer",
                required: true,
                description: "Default is 50",
                restriction: [],
                schema: []
              },
              {
                name: "Type",
                type: "string",
                required: true,
                description: "Either “Deposit” or “Withdraw”. Leave it as blank to retrieve both Deposit and Withdraw requests.",
                restriction: [],
                schema: []
              }
            ]
          }
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
                    name: "error",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: [
                      {
                        name: "Count",
                        type: "integer",
                        required: false,
                        description: "25"
                      },
                      {
                        name: "Entities",
                        type: "string",
                        required: false,
                        description: ""
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            code: 500,
            message: "InternalServer",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "string",
                    required: false,
                    description: "1 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: " Agent Name is not found",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Response samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "AgentName": "AGN",
              "ApiKey": "aaaappppiiiikkkkeeeeyyyy",
              "ToDate":"2020-04-01 00:00:00",
              "FromDate":"2019-08-30 00:00:00",
              "PageIndex": 1,
              "PageSize": 100,
              "Type": "deposit"
              }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "",
              "data": {
                  "Count": 25,
                  "Entities": [
                      {
                          "Id": 1906,
                          "Type": "Deposit",
                          "CreateDate": "2020-03-11T16:29:44.000Z",
                          "StartAmount": 5000.00,
                          "AmountChange": 1050.00,
                          "EndAmount": 6050.00,
                          "TransGuid": "xbe0jssz4av5iddo",
                          "AgentName": "AGN",
                          "UserName": "xxx",
                          "Note": null
                      },
                      {
                          "Id": 1905,
                          "Type": "Deposit",
                          "CreateDate": "2020-03-11T16:28:50.000Z",
                          "StartAmount": 4498.00,
                          "AmountChange": 502.00,
                          "EndAmount": 5000.00,
                          "TransGuid": "qv18zaizhdm8xoza",
                          "AgentName": "AGN",
                          "UserName": "xxxx",
                          "Note": null
                      }
                  ]
              }
              }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": " Agent Name is not found",
              "data": ""
              }
          }
        ]
      },
      {
        title: "BetListPaginated",
        id: "bet_list_paginated",
        type: ApiEnum.POST,
        endpoint: "https://{{data_domain}}/data/BetListPaginated",
        description: "Like the BetListBy function but add more field in the response: `Count`. This will let client paginate data.",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "FromDate",
                type: "string",
                required: true,
                description: "This is a string that represents a date. The format is “YYYY-MM-DD HH:mm:ss”.",
                restriction: [],
                schema: []
              },
              {
                name: "ToDate",
                type: "string",
                required: true,
                description: "This is a string that represents a date. The format is “YYYY-MM-DD HH:mm:ss”",
                restriction: [],
                schema: []
              },
              {
                name: "ProviderId",
                type: "integer",
                required: true,
                description: "The provider-id. So, the result will be limited to this provider only.",
                restriction: [],
                schema: []
              },
              {
                name: "PageIndex",
                type: "integer",
                required: true,
                description: "This integer denotes the page index that you want to get bet list. Starting with 1.",
                restriction: [],
                schema: []
              },
              {
                name: "PageSize",
                type: "integer",
                required: false,
                description: "This value will limit the result of the response. It is optional. If not present, default value for PageSize is 100.",
                restriction: [],
                schema: []
              },
              {
                name: "TimeSpecific",
                type: "boolean",
                required: false,
                description: "By default, this field will have the value `false`. When this field is `true`, we will consider to limit the result to the specific time in `FromDate` and `ToDate`",
                restriction: [],
                schema: []
              }
            ]
          }
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
                    name: "error",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: [
                      {
                        name: "Count",
                        type: "integer",
                        required: false,
                        description: "941"
                      },
                      {
                        name: "Entities",
                        type: "string",
                        required: false,
                        description: ""
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            code: 500,
            message: "InternalServer",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "string",
                    required: false,
                    description: "1 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "corresponding message",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Response samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "FromDate":"2019-08-01 00:00:00",
              "ToDate":"2019-08-30 00:00:00",
              "ProviderId": 3,
              "PageIndex": 1,
              "PageSize": 10,
              "TimeSpecific": true
              }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
    "message": "",
    "data": {
        "Count": 941,
        "Entities": [
            {
                "UserName": "parker",
                "TransGuid": "20200522090740961110660",
                "ActualStake": 4.00,
                "WinLost": 24.00,
                "Profit": 20.00,
                "StartAmount": 9668.00,
                "WinLoseDate": "2020-05-22T01:06:37.780Z",
                "BetDate": "2020-05-22T01:06:37.780Z",
                "GameType": "S-MM01",
                "GameId": "20200522090740628110659",
                "ProductType": "Slot",
                "TableName": "Web",
                "Status": "Settled",
                "ProviderStatus": "Payout",
                "ProviderId": 14,
                "Provider": "Prv",
                "Result": null,
                "PlayTypeName": null
            },
            {
                "UserName": "parker",
                "TransGuid": "20200522090737678110658",
                "ActualStake": 4.00,
                "WinLost": 0.00,
                "Profit": -4.00,
                "StartAmount": 9672.00,
                "WinLoseDate": "2020-05-22T01:06:34.493Z",
                "BetDate": "2020-05-22T01:06:34.493Z",
                "GameType": "S-MM01",
                "GameId": "20200522090737346110657",
                "ProductType": "Slot",
                "TableName": "Web",
                "Status": "Settled",
                "ProviderStatus": "Payout",
                "ProviderId": 14,
                "Provider": "Prv",
                "Result": null,
                "PlayTypeName": null
            }
        ]
    }
              }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": "corresponding message",
              "data": ""
              }
          }
        ]
      },
      {
        title: "GetOutStandingBets",
        id: "getoutstandingbets",
        type: ApiEnum.POST,
        endpoint: "https://{{data_domain}}/data/GetOutStandingBets",
        description: "",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "AgentName",
                type: "string",
                required: true,
                description: "The Agentname pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema: []
              },
              {
                name: "ApiKey",
                type: "string",
                required: true,
                description: "The key pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema: []
              },
              {
                name: "UserName",
                type: "string",
                required: false,
                description: "Get outstanding bets for user by username, if not will get outstanding bets for all agent users",
                restriction: [],
                schema: []
              }
            ]
          }
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
                    name: "error",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          },
          {
            code: 500,
            message: "InternalServer",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "string",
                    required: false,
                    description: "1 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "corresponding message",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "[]",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Response samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "AgentName" : "{{agent_name}}",
              "ApiKey" : "{{api_key}}",
              "UserName" : "UserName1"
              }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "",
              "data": [
                  {
                      "subBet": [
                          {
                              "transId": 4011031,
                              "betOption": "Melbourne Victory (n)",
                              "marketType": "Handicap",
                              "hdp": -0.5,
                              "odds": -0.98,
                              "league": "Australia Hyundai A League",
                              "match": "Melbourne Victory (n) vs Central Coast Mariners",
                              "status": "running",
                              "winlostDate": "2020-08-03T00:00:00.000Z",
                              "liveScore": "0:0",
                              "htScore": "0:0",
                              "ftScore": "0:0",
                              "customeizedBetType": "",
                              "isHalfWonLose": false,
                              "isLive": false,
                              "kickOffTime": "2020-08-03T05:30:00"
                          }
                      ],
                      "refNo": "4011031",
                      "username": "011BOBLOG90",
                      "sportType": "Football",
                      "orderTime": "2020-08-03T02:09:34.590Z",
                      "winlostDate": "2020-08-03T00:00:000Z",
                      "modifyDate": "2020-08-03T02:09:34.590Z",
                      "odds": -0.98,
                      "oddsStyle": "M",
                      "stake": 12.0,
                      "actualStake": 11.76,
                      "currency": "MYR",
                      "status": "running",
                      "winlose": 0.0,
                      "turnover": 12.0,
                      "isHalfWonLose": false,
                      "isLive": false,
                      "MaxWinWithoutActualStake": 12.0,
                      "Ip": "42.191.235.171"
                    }
              ]
            }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": "corresponding message",
              "data": []
              }
          }
        ]
      }, 
      {
        title: "Get Sum of Balance of all players",
        id: "get_sum_of_balance_of_all_players",
        type: ApiEnum.POST,
        endpoint: "https://{{data_domain}}/data/sum-player-balance",
        description: "",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "AgentName",
                type: "string",
                required: true,
                description: "Agent name that we provided you",
                restriction: [],
                schema: []
              },
              {
                name: "APIKey",
                type: "string",
                required: true,
                description: "APIKey that we provided you",
                restriction: [],
                schema: []
              }
            ]
          }
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
                    name: "error",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          },
          {
            code: 500,
            message: "InternalServer",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "string",
                    required: false,
                    description: "1 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "corresponding message",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Response samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "AgentName": "agname",
    	        "APIKey": "---"
              }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "",
              "data": [
                  {
                      "AgentName": "<agentname>",
                      "SumBalance": 12322.29
                  }
              ]
            }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": "corresponding message",
              "data": ""
              }
          }
        ]
      },
      {
        title: "BetListDetailsV3",
        id: "betlistdetailsv3",
        type: ApiEnum.POST,
        endpoint: "https://{{data_domain}}/data/BetListDetailsV3",
        description: "Like the BetListDetails (3.13) function but the input is different. This version will require Agent Name, API Key and Playername, instead of Authorization token.",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "FromDate",
                type: "string",
                required: true,
                description: "This is a string that represents a date. The format is “YYYY-MM-DD HH:mm:ss”.",
                restriction: [],
                schema: []
              },
              {
                name: "ToDate",
                type: "string",
                required: true,
                description: "This is a string that represents a date. The format is “YYYY-MM-DD HH:mm:ss”",
                restriction: [],
                schema: []
              },
              {
                name: "AgentName",
                type: "string",
                required: true,
                description: "Agent name that we provided you",
                restriction: [],
                schema: []
              },
              {
                name: "APIKey",
                type: "string",
                required: true,
                description: "APIKey that we provided you",
                restriction: [],
                schema: []
              },
              {
                name: "PlayerName",
                type: "string",
                required: true,
                description: "Player username",
                restriction: [],
                schema: []
              },
              {
                name: "ProviderId",
                type: "integer",
                required: true,
                description: "The provider-id. So, the result will be limited to this provider only.",
                restriction: [],
                schema: []
              },
              {
                name: "PageIndex",
                type: "integer",
                required: true,
                description: "This integer denotes the page index that you want to get bet list. Starting with 1.",
                restriction: [],
                schema: []
              },
              {
                name: "PageSize",
                type: "integer",
                required: false,
                description: "This value will limit the result of the response. It is optional. If not present, default value for PageSize is 100.",
                restriction: [],
                schema: []
              },
              {
                name: "TimeSpecific",
                type: "boolean",
                required: false,
                description: "By default, this field will have the value `false`. When this field is `true`, we will consider to limit the result to the specific time in `FromDate` and `ToDate`",
                restriction: [],
                schema: []
              }
            ]
          }
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
                    name: "error",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: [
                      {
                        name: "Count",
                        type: "integer",
                        required: false,
                        description: "1"
                      },
                      {
                        name: "Entities",
                        type: "string",
                        required: false,
                        description: ""
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            code: 500,
            message: "InternalServer",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "string",
                    required: false,
                    description: "1 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "corresponding message",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Response samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "AgentName": "agname",
              "PlayerName": "test01",
              "APIKey": "-----",
              "FromDate":"2020-05-22 01:06:00",
              "ToDate":"2020-07-22 01:07:00",
              "PageIndex": 1,
              "PageSize": 20,
              "ProviderId": 2,
              "TimeSpecific": false
              }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "",
              "data": {
                  "Count": 1,
                  "Entities": [
                      {
                    "Ip": "192.168.1.1",
                    "TurnOver": 98.00,
                          "UserName": "ccaskdksport",
                          "TransGuid": "3998214",
                          "ActualStake": 98.00,
                          "WinLost": 49.00,
                          "Profit": -49.00,
                          "StartAmount": 100004.77,
                          "WinLoseDate": "2020-07-07T04:00:00.000Z",
                          "BetDate": "2020-07-07T10:53:39.430Z",
                          "GameType": "SportsBook",
                          "GameId": null,
                          "ProductType": "Football",
                          "TableName": null,
                          "Status": "Settled",
                          "ProviderStatus": "lose",
                          "ProviderId": 2,
                          "Provider": "SBO_BetFun",
                          "Result": null,
                          "PlayTypeName": null,
                          "SubBets": "[    {      \"transId\": 3998214,      \"betOption\": \"Chelsea\",      \"marketType\": \"Handicap\",      \"hdp\": -1.25,      \"odds\": -0.98,      \"league\": \"ENGLISH PREMIER LEAGUE\",      \"match\": \"Crystal Palace vs Chelsea\",      \"status\": \"lose\",      \"winlostDate\": \"2020-07-07T00:00:00\",      \"liveScore\": \"0:0\",      \"htScore\": \"1:2\",      \"ftScore\": \"2:3\",      \"customeizedBetType\": \"\",      \"isHalfWonLose\": false,      \"isLive\": false,      \"kickOffTime\": \"2020-07-07T13:00:00\"    }  ]"
                      }
                  ]
              }
            }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": "corresponding message",
              "data": ""
              }
          }
        ]
      },
      {
        title: "GetGameHistoryUrl",
        id: "getgamehistoryurl",
        type: ApiEnum.POST,
        endpoint: "https://{{data_domain}}/data/get-game-history-url",
        description: "",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "TransGuid",
                type: "string",
                required: true,
                description: "Transguid of bet",
                restriction: [],
                schema: []
              },
              {
                name: "ProviderId",
                type: "integer",
                required: true,
                description: "The provider-id",
                restriction: [],
                schema: []
              },
              {
                name: "Language",
                type: "string",
                required: false,
                description: "Language: EN-US, TH-TH, ZN-CN",
                restriction: [],
                schema: []
              }
            ]
          }
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
                    name: "error",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "http",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          },
          {
            code: 500,
            message: "InternalServer",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "string",
                    required: false,
                    description: "1 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "corresponding message",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Response samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "TransGuid": "transguId",
              "ProviderId": 6,
              "Language": "EN-US" 
              }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "",
              "data": "http://...."
              }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": "corresponding message",
              "data": ""
              }
          }
        ]
      },
      {
        title: "WinloseSummarize",
        id: "winlosesummarize",
        type: ApiEnum.POST,
        endpoint: "https://{{data_domain}}/ WinloseSummarize/GetAll",
        description: "",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "ApiKey",
                type: "string",
                required: true,
                description: "The key pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema: []
              },
              {
                name: "AgentName",
                type: "string",
                required: true,
                description: "The Agentname pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema: []
              },
              {
                name: "UserName",
                type: "string",
                required: false,
                description: "Username cannot be longer than 15 chars. Only numeric and alphabet is allowed in username. Username must be unique among all users in fund provider",
                restriction: [],
                schema: []
              },
              {
                name: "FromDate",
                type: "string",
                required: true,
                description: "The `Fromdate` in string format “yyyy-MM-dd”",
                restriction: [],
                schema: []
              },
              {
                name: "ToDate",
                type: "string",
                required: true,
                description: "The `Todate` in string format “yyyy-MM-dd”",
                restriction: [],
                schema: []
              },
              {
                name: "FromTimeId",
                type: "long",
                required: false,
                description: "Default 0. ",
                restriction: [],
                schema: []
              }
            ]
          }
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
                    name: "error",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "OK",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: [
                      {
                        name: "TotalCount",
                        type: "integer",
                        required: false,
                        description: "1"
                      },
                      {
                        name: "Items",
                        type: "string",
                        required: false,
                        description: ""
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            code: 500,
            message: "InternalServer",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "string",
                    required: false,
                    description: "1 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "corresponding message",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Response samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "ApiKey":"{{api_key}}",
              "AgentName":"{{agent_name}}",
              "FromDate": "2021-04-04",
              "ToDate": "2021-04-06",
              "FromTimeId": 3,
              "ToTimeId": 3, 
              "Username": "",
              "TimeZone": "00:00"
              }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "OK",
              "data": {
                "TotalCount": 1,
                "Items": [
                  {
                    "ProviderId": 8,
                    "GameType": "MiniGame",
                    "Username": "Playername",
                    "BetCount": 476,
                    "Stake": 875700,
                    "ActualStake": 739700,
                    "Winlose": 838504,
                    "Turnover": 739700,
                    "Profit": 37196,
                    "AgentPush": 2231.76
                  }
                ]
              }
              }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": "corresponding message",
              }
          }
        ]
      },
      {
        title: "BettingHistory",
        id: "bettinghistory",
        type: ApiEnum.POST,
        endpoint: "https://{{data_domain}}/Data/BettingHistory",
        description: "",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "ApiKey",
                type: "string",
                required: true,
                description: "The key pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema: []
              },
              {
                name: "AgentName",
                type: "string",
                required: true,
                description: "The Agentname pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema: []
              },
              {
                name: "Username",
                type: "string",
                required: false,
                description: "Username cannot be longer than 15 chars. Only numeric and alphabet is allowed in username. Username must be unique among all users in fund provider",
                restriction: [],
                schema: []
              },
              {
                name: "FromDate",
                type: "string",
                required: true,
                description: "The `FromDate` in string format “yyyy-MM-dd”",
                restriction: [],
                schema: []
              },
              {
                name: "ToDate",
                type: "string",
                required: true,
                description: "The `ToDate` in string format “yyyy-MM-dd”",
                restriction: [],
                schema: []
              },
              {
                name: "ProviderId",
                type: "integer",
                required: false,
                description: "Provider id we provided.",
                restriction: [],
                schema: []
              },
              {
                name: "GameType",
                type: "string",
                required: false,
                description: "Game type we provided.",
                restriction: [],
                schema: []
              },
              {
                name: "GameId",
                type: "string",
                required: false,
                description: "GameId/RoundId",
                restriction: [],
                schema: []
              },
              {
                name: "TransGuid",
                type: "string",
                required: false,
                description: "Unique TransGuid/RefNo in system.",
                restriction: [],
                schema: []
              },
              {
                name: "PageIndex",
                type: "integer",
                required: true,
                description: "This integer denotes the page index that you want to get bet list. Starting with 1.",
                restriction: [],
                schema: []
              },
              {
                name: "PageSize",
                type: "integer",
                required: false,
                description: "This value will limit the result of the response. It is optional. If not present, default value for pageSize is 100.",
                restriction: [],
                schema: []
              }
            ]
          }
        ],
        responses: [
          {
            code: 200,
            message: "OK",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: []
              }
            ]
          },
          {
            code: 500,
            message: "InternalServer",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "string",
                    required: false,
                    description: "1 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "corresponding message",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Response samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
                "ApiKey":"{{api_key}}",
                "AgentName":"{{agent_name}}",
                "FromDate": "2021-01-20",
                "ToDate": "2021-06-14",
                "Username":"",
                "ProviderId": -1,
                "GameType": "",
                "GameId": "",
                "TransGuid": "",
                "PageIndex": 1,
                "PageSize": 20
              }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "OK",
              "data": {
                  "TotalCount": 15,
                  "Items": [
                      {
                          "Playername": "PlayerName",
                          "TransGuid": "ab33a1a5-48bc-464f-6a3d-08d92a392ff2",
                          "CreatedDate": "2021-06-14T22:02:21.000Z",
                          "WinloseDate": "2021-06-14T21:58:14.23.000Z",
                          "GameType": "Slot",
                          "GameId": "e530a1aa-b11d-443d-6a3b-08d92a392ff2",
                          "TableName": "Mega_Rise",
                          "ProductType": "Mega_Rise",
                          "SubBets": "{\"externalbetid\":\"956445737\",\"externalgameid\":\"MegaRise\",\"externalroundid\":\"956445737\",\"platformtype\":0,\"isclosinground\":true}",
                          "Odds": 0.0,
                          "OddsStyle": null,
                          "Currency": "THB",
                          "Stake": 10.00,
                          "ActualStake": 10.00,
                          "Profit": -10.00,
                          "Turnover": 10.00,
                          "Winloss": 0.00,
                          "StartAmount": 0.00,
                          "EndAmount": 0.00,
                          "Ip": "94.237.78.228",
                          "Status": "Settled",
                          "ProviderStatus": "Lose",
                          "ProviderId": 10,
                          "ProviderName": "RT Slot",
                          "IsHalfWonLose": null,
                          "GameName": "Mega Rise",
                          "BetChoice": ""
                      }
                  ]
              }
              }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": "corresponding message",
              }
          }
        ]
      },
      {
        title: "WinloseV2",
        id: "winlosev2",
        type: ApiEnum.POST,
        endpoint: "https://{{data_domain}}/data/winloseV2",
        description: "Get list of winlose summary data of a player but limited in specified date range and provider. ",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "FromDate",
                type: "string",
                required: true,
                description: "This is a string that represents a date. The format is “YYYY-MM-DD HH:mm:ss”.",
                restriction: [],
                schema: []
              },
              {
                name: "ToDate",
                type: "string",
                required: true,
                description: "This is a string that represents a date. The format is “YYYY-MM-DD HH:mm:ss”",
                restriction: [],
                schema: []
              },
              {
                name: "ProviderId",
                type: "integer",
                required: true,
                description: "The provider-id. Set = -1 to get all data",
                restriction: [],
                schema: []
              },
              {
                name: "GameType",
                type: "string",
                required: false,
                description: "GameType. Set = “” to get all gametype",
                restriction: [],
                schema: []
              }
            ]
          }
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
                    name: "error",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "OK",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: [
                      {
                        name: "GameType",
                        type: "string",
                        required: false,
                        description: "Slot"
                      },
                      {
                        name: "UserName",
                        type: "string",
                        required: false,
                        description: "demo_02"
                      },
                      {
                        name: "TotalBetAmount",
                        type: "number",
                        required: false,
                        description: "56.25"
                      },
                      {
                        name: "TotalWinlost",
                        type: "number",
                        required: false,
                        description: "1930.00"
                      },
                      {
                        name: "TotalProfit",
                        type: "number",
                        required: false,
                        description: "1873.75"
                      },
                      {
                        name: "ProviderId",
                        type: "integer",
                        required: false,
                        description: "8"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            code: 500,
            message: "InternalServer",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "string",
                    required: false,
                    description: "1 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "corresponding message",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Response samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "FromDate":"2019-08-01 00:00:00",
              "ToDate":"2019-08-30 00:00:00",
              "ProviderId": 3
              }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "OK",
              "data": {
                  "GameType": "Slot",
                  "UserName": "demo_02",
                  "TotalBetAmount": 56.25,
                  "TotalWinlost": 1930.00,
                  "TotalProfit": 1873.75,
                  "ProviderId": 8
              }
            }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": "corresponding message",
              "data": ""
              }
          }
        ]
      },
      {
        title: "WinloseAllV2",
        id: "winloseallv2",
        type: ApiEnum.POST,
        endpoint: "https://{{data_domain}}/data/winloseallv2",
        description: "Get list of winlose summary data from all players in specified provider. So, this function doesn’t require authorization token as above functions. But it requires ApiKey and AgentName instead.",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "ApiKey",
                type: "string",
                required: true,
                description: "The key pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema: []
              },
              {
                name: "AgentName",
                type: "string",
                required: true,
                description: "The Agentname pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema: []
              },
              {
                name: "FromDate",
                type: "string",
                required: true,
                description: "This is a string that represents a date. The format is “YYYY-MM-DD HH:mm:ss”.",
                restriction: [],
                schema: []
              },
              {
                name: "ToDate",
                type: "string",
                required: true,
                description: "This is a string that represents a date. The format is “YYYY-MM-DD HH:mm:ss”",
                restriction: [],
                schema: []
              },
              {
                name: "ProviderId",
                type: "integer",
                required: true,
                description: "The provider-id. Set = -1 to get all data",
                restriction: [],
                schema: []
              },
              {
                name: "GameType",
                type: "string",
                required: false,
                description: "GameType. Set = “” to get all gametype",
                restriction: [],
                schema: []
              }
            ]
          }
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
                    name: "error",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: [
                      {
                        name: "TotalBetAmount",
                        type: "number",
                        required: false,
                        description: "0.0"
                      },
                      {
                        name: "TotalWinlost",
                        type: "number",
                        required: false,
                        description: "0.0"
                      },
                      {
                        name: "TotalProfit",
                        type: "number",
                        required: false,
                        description: "0.0"
                      },
                      {
                        name: "ProviderId",
                        type: "integer",
                        required: false,
                        description: "4"
                      },
                      {
                        name: "Provider",
                        type: "string",
                        required: false,
                        description: "PP"
                      },
                      {
                        name: "GameType",
                        type: "string",
                        required: false,
                        description: "Slot"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            code: 500,
            message: "InternalServer",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "string",
                    required: false,
                    description: "1 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "corresponding message",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Response samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "ApiKey":"{{api_key}}",
              "AgentName":"{{agent_name}}",
              "FromDate":"2019-08-01 00:00:00",
              "ToDate":"2019-08-30 00:00:00",
              "ProviderId": 4,
              "GameType": "Slot"
              }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "",
              "data": {
                  "TotalBetAmount": 0.0,
                  "TotalWinlost": 0.0,
                  "TotalProfit": 0.0,
                  "ProviderId": 4,
                  "Provider": "PP",
                  "GameType": "Slot"
              }
              }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": "corresponding message",
              "data": ""
              }
          }
        ]
      },
      {
        title: "List available game",
        id: "list_available_game",
        type: ApiEnum.GET,
        endpoint: "https://{{data_domain}}/data/games",
        description: "Get list of winlose summary data from all players in specified provider. So, this function doesn’t require authorization token as above functions. But it requires ApiKey and AgentName instead.",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "ApiKey",
                type: "string",
                required: true,
                description: "The key pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema: []
              },
              {
                name: "AgentName",
                type: "string",
                required: true,
                description: "The Agentname pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema: []
              },
              {
                name: "ProviderId",
                type: "integer",
                required: true,
                description: "The provider-id. Set = -1 to get all data",
                restriction: [],
                schema: []
              }
            ]
          }
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
                    name: "error",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "OK",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          },
          {
            code: 500,
            message: "InternalServer",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "string",
                    required: false,
                    description: "1 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "corresponding message",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Response samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "ApiKey":"{{api_key}}",
              "AgentName":"{{agent_name}}",
              "providerId": 6
              }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "OK",
              "data": [
                  {
                      "ProviderId": 6,
                      "ProviderName": "Sexy Gaming",
                      "GameId": "",
                      "GameName": "Sexy Baccarat",
                      "GameType": "SexyBaccarat",
                      "GameImageUrl": "https://image.12live.vip/icons/live/Game_MX_Sexy_Gaming_Lobby_910x367.png",
                      "OrderBy": 14
                  },
                  {
                      "ProviderId": 6,
                      "ProviderName": "Sexy Gaming",
                      "GameId": "2",
                      "GameName": "Sexy Baccarat",
                      "GameType": "SexyBaccarat",
                      "GameImageUrl": "https://image.12live.vip/icons/ag_casino/Live_Dealers.png",
                      "OrderBy": 118
                  }
              ]
              }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": "corresponding message",
              "data": ""
              }
          }
        ]
      },
      {
        title: "Get Game History Url By RoundId",
        id: "getgamehistoryurlbyroundid",
        type: ApiEnum.POST,
        endpoint: "https://{{data_domain}}/data/get-game-history-url-by-roundid",
        description: "",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "ApiKey",
                type: "string",
                required: true,
                description: "The key pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema: []
              },
              {
                name: "AgentName",
                type: "string",
                required: true,
                description: "The AgentName pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema: []
              },
              {
                name: "Language",
                type: "string",
                required: false,
                description: "See Appendix",
                restriction: [],
                schema: []
              },
              {
                name: "ProviderId",
                type: "integer",
                required: true,
                description: "The provider-id",
                restriction: [],
                schema: []
              },
              {
                name: "RoundId",
                type: "string",
                required: true,
                description: "RoundId of game",
                restriction: [],
                schema: []
              },
              {
                name: "PlayerUsername",
                type: "string",
                required: true,
                description: "",
                restriction: [],
                schema: []
              },
              {
                name: "GameType",
                type: "string",
                required: false,
                description: "Gametype",
                restriction: [],
                schema: []
              }
            ]
          }
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
                    name: "error",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "http",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          },
          {
            code: 500,
            message: "InternalServer",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "string",
                    required: false,
                    description: "1 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "corresponding message",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Response samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "ApiKey":"{{api_key}}",
              "AgentName":"{{agent_name}}",
              "Language": "en-US",
              "ProviderId": "8",
              "RoundId":"3396984",
              "PlayerUsername":"player01",
              "GameType":""
              }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "",
              "data": "http://...."
              }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": "corresponding message",
              "data": ""
              }
          }
        ]
      },
      {
        title: "MMG-OutStandingBets",
        id: "mmg_outstandingbets",
        type: ApiEnum.POST,
        endpoint: "https://{{data_domain}}/data/mmg-outstandingbets",
        description: "",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "AgentName",
                type: "string",
                required: true,
                description: "The Agentname pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema: []
              },
              {
                name: "ApiKey",
                type: "string",
                required: true,
                description: "The key pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema: []
              },
              {
                name: "UserName",
                type: "string",
                required: false,
                description: "Get outstanding bets for user by username, if not will get outstanding bets for all agent users",
                restriction: [],
                schema: []
              }
            ]
          }
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
                    name: "error",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          },
          {
            code: 500,
            message: "InternalServer",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "string",
                    required: false,
                    description: "1 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "corresponding message",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "[]",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Response samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "AgentName" : "{{agent_name}}",
              "ApiKey" : "{{api_key}}",
              "UserName" : "UserName1"
              }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "",
              "data": [
                  {
                      "username": "demo01",
                      "orderTime": "2022-04-26T03:12:50.313",
                      "stake": 3.00,
                      "transGuid": "mm-32323572",
                      "providerId": 8,
                      "gameId": "32323572",
                      "ProductType": "Aztec King",
                      "TableName": "35",
                      "GameType": "Slot",
                  }
              ]
              }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": "corresponding message",
              "data": []
              }
          }
        ]
      },
      {
        title: "BetListDetailsV2",
        id: "betlistdetailsv2",
        type: ApiEnum.POST,
        endpoint: "https://{{api_domain}}/data/BetListDetailsV2",
        description: "Like the BetListDetails (3.13) function but the input is different. This version will require Agent Name, API Key and Playername, instead of Authorization token.",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "fromDate",
                type: "string",
                required: true,
                description: "This is a string that represents a date. The format is “YYYY-MM-DD HH:mm:ss”.",
                restriction: [],
                schema: []
              },
              {
                name: "toDate",
                type: "string",
                required: true,
                description: "This is a string that represents a date. The format is “YYYY-MM-DD HH:mm:ss”",
                restriction: [],
                schema: []
              },
              {
                name: "AgentName",
                type: "string",
                required: true,
                description: "Agent name that we provided you",
                restriction: [],
                schema: []
              },
              {
                name: "APIKey",
                type: "string",
                required: true,
                description: "APIKey that we provided you",
                restriction: [],
                schema: []
              },
              {
                name: "providerId",
                type: "integer",
                required: true,
                description: "The provider-id. So, the result will be limited to this provider only.",
                restriction: [],
                schema: []
              },
              {
                name: "pageIndex",
                type: "integer",
                required: true,
                description: "This integer denotes the page index that you want to get bet list. Starting with 1.",
                restriction: [],
                schema: []
              },
              {
                name: "pageSize",
                type: "integer",
                required: false,
                description: "This value will limit the result of the response. It is optional. If not present, default value for pageSize is 100.",
                restriction: [],
                schema: []
              },
              {
                name: "TimeSpecific",
                type: "boolean",
                required: false,
                description: "By default, this field will have the value `false`. When this field is `true`, we will consider to limit the result to the specific time in `fromDate` and `toDate`",
                restriction: [],
                schema: []
              }
            ]
          }
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
                    name: "error",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: [
                      {
                        name: "Count",
                        type: "integer",
                        required: false,
                        description: "1"
                      },
                      {
                        name: "Entities",
                        type: "string",
                        required: false,
                        description: ""
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            code: 500,
            message: "InternalServer",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "string",
                    required: false,
                    description: "1 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "corresponding message",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Response samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "AgentName": "agname",
              "PlayerName": "test01",
              "APIKey": "-----",
              "fromDate":"2020-05-22 01:06:00",
              "toDate":"2020-07-22 01:07:00",
              "pageIndex": 1,
              "PageSize": 20,
              "providerId": 2,
              "TimeSpecific": false
              }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "",
              "data": {
                  "Count": 1,
                  "Entities": [
                      {
                          "UserName": "ccaskdksport",
                          "TransGuid": "3998214",
                          "ActualStake": 98.00,
                          "WinLost": 49.00,
                          "Profit": -49.00,
                          "StartAmount": 100004.77,
                          "WinLoseDate": "2020-07-07T04:00:00",
                          "BetDate": "2020-07-07T10:53:39.43",
                          "GameType": "SportsBook",
                          "GameId": null,
                          "ProductType": "Football",
                          "TableName": null,
                          "Status": "Settled",
                          "ProviderStatus": "lose",
                          "ProviderId": 2,
                          "Provider": "SBO_BetFun",
                          "Result": null,
                          "PlayTypeName": null,
                          "SubBets": "[    {      \"transId\": 3998214,      \"betOption\": \"Chelsea\",      \"marketType\": \"Handicap\",      \"hdp\": -1.25,      \"odds\": -0.98,      \"league\": \"ENGLISH PREMIER LEAGUE\",      \"match\": \"Crystal Palace vs Chelsea\",      \"status\": \"lose\",      \"winlostDate\": \"2020-07-07T00:00:00\",      \"liveScore\": \"0:0\",      \"htScore\": \"1:2\",      \"ftScore\": \"2:3\",      \"customeizedBetType\": \"\",      \"isHalfWonLose\": false,      \"isLive\": false,      \"kickOffTime\": \"2020-07-07T13:00:00\"    }  ]"
                      }
                  ]
              }
              }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": "corresponding message",
              "data": ""
              }
          }
        ]
      },
    ]
  },
]

export const apiProvider = [
  {
    title:"Mimi",
    id: "mimi",
    api:[
      {
        title: "Get Balance",
        id: "get_balance_mimi",
        type: ApiEnum.POST,
        endpoint: "",
        description: "Sync player’s balance periodically",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "ApiKey",
                type: "string",
                required: true,
                description: "The key pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema: []
              },
              {
                name: "action",
                type: "string",
                required: true,
                description: "Notice: we will send the exact value `getBalance` ",
                restriction: [],
                schema: []
              },
              {
                name: "userId",
                type: "string",
                required: false,
                description: "userId in 12live system",
                restriction: [],
                schema: []
              },
              {
                name: "userName",
                type: "string",
                required: true,
                description: "Player username",
                restriction: [],
                schema: []
              }
            ]
          }
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
                    name: "error",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "10000.23",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          },
          {
            code: 500,
            message: "InternalServer",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "string",
                    required: false,
                    description: "1 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "corresponding message",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Response samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "ApiKey":"{{api_key}}",
              "action":"getBalance",
              "userId": 9088330,
              "userName":" 003",
              }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "",
              "balance": 45491.45
              }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": "corresponding message"
              }
          }
        ]
      },
      {
        title: "Place Bet",
        id: "place_bet_mimi",
        type: ApiEnum.POST,
        endpoint: "",
        description: "Sending bet information to single wallet site 1. Every bet request response must include 'balance' parameter to update player balance on the page. 2. Current status of bet transaction is unsettled. 3. Any bet failure occurred will trigger 'Cancel Bet' function to cancel this transaction.",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "ApiKey",
                type: "string",
                required: true,
                description: "The key pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema: []
              },
              {
                name: "action",
                type: "string",
                required: true,
                description: "bet",
                restriction: [],
                schema: []
              },
              {
                name: "userId",
                type: "string",
                required: true,
                description: "userId in 12live system",
                restriction: [],
                schema: []
              },
              {
                name: "userName",
                type: "string",
                required: true,
                description: "Player username",
                restriction: [],
                schema: []
              },
              {
                name: "OrderTime",
                type: "datetime",
                required: true,
                description: "Bet order time",
                restriction: [],
                schema: []
              },
              {
                name: "TransGuid",
                type: "string",
                required: true,
                description: "Bet transguid. Bet request and Settle request using same TransGuid",
                restriction: [],
                schema: []
              },
              {
                name: "Stake",
                type: "decimal",
                required: true,
                description: "how much user bet",
                restriction: [],
                schema: []
              },
              {
                name: "ProviderId",
                type: "int",
                required: true,
                description: "Game provider Id on 12live",
                restriction: [],
                schema: []
              },
              {
                name: "GameId",
                type: "string",
                required: true,
                description: "Round Id of game",
                restriction: [],
                schema: []
              },
              {
                name: "ProductType",
                type: "string",
                required: true,
                description: "Game name or Game code",
                restriction: [],
                schema: []
              },
              {
                name: "GameType",
                type: "string",
                required: true,
                description: "Type of game like : Slot, Live..",
                restriction: [],
                schema: []
              },
              {
                name: "TableName",
                type: "string",
                required: true,
                description: "Table name of casino or Game code/ Game name on slot..",
                restriction: [],
                schema: []
              },
              {
                name: "PlayType",
                type: "string",
                required: false,
                description: "Bet choose. Ex: Banker or Player on casino or Gate choose",
                restriction: [],
                schema: []
              },
              {
                name: "ExtraData",
                type: "string",
                required: false,
                description: "game provider info",
                restriction: [],
                schema: []
              },
              {
                name: "BetType",
                type: "string",
                required: false,
                description: "",
                restriction: [],
                schema: []
              }
              
            ]
          }
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
                    name: "error",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "balance",
                    type: "string",
                    required: false,
                    description: "10000.23",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          },
          {
            code: 500,
            message: "InternalServer",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "string",
                    required: false,
                    description: "1 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "corresponding message",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Response samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "ApiKey":"{{api_key}}",
              "action":"bet",
              "data":[
              {
              "UserId":9088330,
              "UserName":"001",
              "OrderTime":"2024-05-02T08:44:56.840Z",
              "TransGuid":"mm-142540802",
              "Stake":3.0,
              "ProviderId":8,
              "ParentId":3857816,
              "GameId":"142540802",
              "ProductType":"League Of Legends",
              "GameType":"Slot",
              "TableName":"54",
              "PlayType":"",
              "ExtraData":"",
              "BetType":"" 
              }
            ]
          }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "balance":45491.45,
              "error":0,
              "message":null,
              "data":[
                {
                "userId":"9088330",
                "transId":"mm-142540802",
                "balance":45491.45,
                "error":0,
                "message":null,
                "dup":false
                }
              ],
              "statementDate":null
              }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": "corresponding message",
              // "error1": 10, //balance not enough
              // "error2": 1031, //system error
              },
              
          }
        ]
      },
      {
        title: "Cancel Bet",
        id: "cancel_bet_mimi",
        type: ApiEnum.POST,
        endpoint: "",
        description: "Sending bet information to single wallet site 1. When place bet has failure will call 'Cancel Bet'. 2. When cancel bet is unsuccessful will schedule a job to repeat it until success.",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "ApiKey",
                type: "string",
                required: true,
                description: "The key pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema: []
              },
              {
                name: "action",
                type: "string",
                required: true,
                description: "bet",
                restriction: [],
                schema: []
              },
              {
                name: "userId",
                type: "string",
                required: true,
                description: "userId in 12live system",
                restriction: [],
                schema: []
              },
              {
                name: "userName",
                type: "string",
                required: true,
                description: "Player username",
                restriction: [],
                schema: []
              },
              {
                name: "OrderTime",
                type: "datetime",
                required: true,
                description: "Bet order time",
                restriction: [],
                schema: []
              },
              {
                name: "TransGuid",
                type: "string",
                required: true,
                description: "Bet transguid. Bet request and Settle request using same TransGuid",
                restriction: [],
                schema: []
              },
              {
                name: "Stake",
                type: "decimal",
                required: true,
                description: "how much user bet",
                restriction: [],
                schema: []
              },
              {
                name: "ProviderId",
                type: "int",
                required: true,
                description: "Game provider Id on 12live",
                restriction: [],
                schema: []
              },
              {
                name: "GameId",
                type: "string",
                required: true,
                description: "Round Id of game",
                restriction: [],
                schema: []
              },
              {
                name: "ProductType",
                type: "string",
                required: true,
                description: "Game name or Game code",
                restriction: [],
                schema: []
              },
              {
                name: "GameType",
                type: "string",
                required: true,
                description: "Type of game like : Slot, Live..",
                restriction: [],
                schema: []
              },
              {
                name: "TableName",
                type: "string",
                required: true,
                description: "Table name of casino or Game code/ Game name on slot..",
                restriction: [],
                schema: []
              },
              {
                name: "PlayType",
                type: "string",
                required: false,
                description: "Bet choose. Ex: Banker or Player on casino or Gate choose",
                restriction: [],
                schema: []
              },
              {
                name: "ExtraData",
                type: "string",
                required: false,
                description: "game provider info",
                restriction: [],
                schema: []
              },
              {
                name: "BetType",
                type: "string",
                required: false,
                description: "",
                restriction: [],
                schema: []
              }
              
            ]
          }
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
                    name: "error",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "balance",
                    type: "string",
                    required: false,
                    description: "10000.23",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          },
          {
            code: 500,
            message: "InternalServer",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "string",
                    required: false,
                    description: "1 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "corresponding message",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Response samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "ApiKey":"{{api_key}}",
              "action":"cancelBet",
              "data":[
                {
                "UserId": 9088330, 
                "UserName": "003", 
                "OrderTime": "2024-05-02T08:44:56.840Z", 
                "TransGuid": "mm-142540802", 
                "Stake": 3.00, 
                "ProviderId": 8, 
                "GameId": "142540802", 
                "ProductType": "League Of Legends", 
                "GameType": "Slot", 
                "TableName": "54",
                "PlayType": "",
                "ExtraData": "",
                "BetType": ""
                }
              ]
            }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "",
              "balance": 45491.45,
              "data":[
                {
                "error": 0, 
                "transId": "mm-142540802", 
                "userId": 9088330, 
                "balance": 45491.45,
                }
              ]
            }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": "corresponding message",
              }
          }
        ]
      },
      {
        title: "Settle Bet",
        id: "settle_bet_mimi",
        type: ApiEnum.POST,
        endpoint: "",
        description: "Sending transactions when had settled.",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "ApiKey",
                type: "string",
                required: true,
                description: "The key pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema: []
              },
              {
                name: "action",
                type: "string",
                required: true,
                description: "bet",
                restriction: [],
                schema: []
              },
              {
                name: "userId",
                type: "string",
                required: true,
                description: "userId in 12live system",
                restriction: [],
                schema: []
              },
              {
                name: "userName",
                type: "string",
                required: true,
                description: "Player username",
                restriction: [],
                schema: []
              },
              {
                name: "OrderTime",
                type: "datetime",
                required: true,
                description: "Bet order time",
                restriction: [],
                schema: []
              },
              {
                name: "TransGuid",
                type: "string",
                required: true,
                description: "Bet transguid. Bet request and Settle request using same TransGuid",
                restriction: [],
                schema: []
              },
              {
                name: "Stake",
                type: "decimal",
                required: true,
                description: "how much user bet",
                restriction: [],
                schema: []
              },
              {
                name: "Winlost",
                type: "decimal",
                required: true,
                description: "Player winlost (included Stake)",
                restriction: [],
                schema: []
              },
              {
                name: "TurnOver",
                type: "decimal",
                required: true,
                description: "",
                restriction: [],
                schema: []
              },
              {
                name: "ProviderId",
                type: "int",
                required: true,
                description: "Game provider Id on 12live",
                restriction: [],
                schema: []
              },
              {
                name: "Provider",
                type: "string",
                required: false,
                description: "Provider name",
                restriction: [],
                schema: []
              },
              {
                name: "GameId",
                type: "string",
                required: true,
                description: "Round Id of game",
                restriction: [],
                schema: []
              },
              {
                name: "ProductType",
                type: "string",
                required: true,
                description: "Game name or Game code",
                restriction: [],
                schema: []
              },
              {
                name: "GameType",
                type: "string",
                required: true,
                description: "Type of game like : Slot, Live..",
                restriction: [],
                schema: []
              },
              {
                name: "TableName",
                type: "string",
                required: true,
                description: "Table name of casino or Game code/ Game name on slot..",
                restriction: [],
                schema: []
              },
              {
                name: "PlayType",
                type: "string",
                required: true,
                description: "Bet choose. Ex: Banker or Player on casino or Gate choose",
                restriction: [],
                schema: []
              },
              {
                name: "ModifyDate",
                type: "datetime",
                required: true,
                description: "Modify date in case resettle we can know when this record resettle.",
                restriction: [],
                schema: []
              },
              {
                name: "WinloseDate",
                type: "datetime",
                required: true,
                description: "Winlose time",
                restriction: [],
                schema: []
              },
              {
                name: "Status",
                type: "String",
                required: true,
                description: "CurrentStatus",
                restriction: [],
                schema: []
              },
              {
                name: "ProviderStatus",
                type: "String",
                required: false,
                description: "Reference provider status",
                restriction: [],
                schema: []
              },
              {
                name: "EndRound",
                type: "boolean",
                required: true,
                description: "Is this settle end of round",
                restriction: [],
                schema: []
              },
              {
                name: "BetType",
                type: "String",
                required: false,
                description: "Bet type",
                restriction: [],
                schema: []
              },
              {
                name: "ReferenceTrans",
                type: "String",
                required: false,
                description: "Reference tranguid",
                restriction: [],
                schema: []
              },
            ]
          }
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
                    name: "error",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "balance",
                    type: "string",
                    required: false,
                    description: "10000.23",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          },
          {
            code: 500,
            message: "InternalServer",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "string",
                    required: false,
                    description: "1 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "corresponding message",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Response samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "ApiKey":"{{api_key}}",
              "action":"settle",
              "data":[
                {
                "UserId":9088330,
                "UserName":"001",
                "OrderTime":"2024-05-02T08:44:56.840Z",
                "TransGuid":"mm-142540802",
                "Stake":0.0,
                "ActualStake":0.0,
                "Winlost":3.0,
                "TurnOver":0.0,
                "Profit":3.0,
                "ModifyDate":"2024-05-02T08:44:56.920Z",
                "WinloseDate":"2024-05-02T08:44:56.920Z",
                "GameType":"Slot",
                "GameId":"142540802",
                "ProductType":"League Of Legends",
                "TableName":"54",
                "Status":"Settled",
                "ProviderStatus":"Settled",
                "Provider":"Mimi",
                "ProviderId":8,
                "CancelType":0,
                "ExtraData":"",
                "BetType":"",
                "ReferenceTrans":"",
                "EndRound":true
                }
              ]
            }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
                "balance":45494.45,
                "error":0,
                "message":null,
                "data":[
                {
                "userId":"9088330",
                "transId":"mm-142540802",
                "balance":45494.45,
                "error":0,
                "message":null,
                "dup":false
                }
              ],
              "statementDate":null
              }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": "corresponding message",
              }
          }
        ]
      },
    ]
  },
  {
    title:"PGSoft",
    id: "pgsoft",
    api:[
      {
        title: "Get Balance",
        id: "get_balance_pgsoft",
        type: ApiEnum.POST,
        endpoint: "",
        description: "Sync player’s balance periodically",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "ApiKey",
                type: "string",
                required: true,
                description: "The key pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema: []
              },
              {
                name: "action",
                type: "string",
                required: true,
                description: "Notice: we will send the exact value `getBalance` ",
                restriction: [],
                schema: []
              },
              {
                name: "userId",
                type: "string",
                required: false,
                description: "userId in 12live system",
                restriction: [],
                schema: []
              },
              {
                name: "userName",
                type: "string",
                required: true,
                description: "Player username",
                restriction: [],
                schema: []
              }
            ]
          }
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
                    name: "error",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "10000.23",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          },
          {
            code: 500,
            message: "InternalServer",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "string",
                    required: false,
                    description: "1 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "corresponding message",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Response samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "ApiKey":"{{api_key}}",
              "action":"getBalance",
              "userId": 9088330,
              "userName":" 003",
              }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "",
              "balance": 45491.45
              }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": "corresponding message"
              }
          }
        ]
      },
      {
        title: "Place Bet",
        id: "place_bet_pgsoft",
        type: ApiEnum.POST,
        endpoint: "",
        description: "Sending bet information to single wallet site 1. Every bet request response must include 'balance' parameter to update player balance on the page. 2. Current status of bet transaction is unsettled. 3. Any bet failure occurred will trigger 'Cancel Bet' function to cancel this transaction.",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "ApiKey",
                type: "string",
                required: true,
                description: "The key pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema: []
              },
              {
                name: "action",
                type: "string",
                required: true,
                description: "bet",
                restriction: [],
                schema: []
              },
              {
                name: "userId",
                type: "string",
                required: true,
                description: "userId in 12live system",
                restriction: [],
                schema: []
              },
              {
                name: "userName",
                type: "string",
                required: true,
                description: "Player username",
                restriction: [],
                schema: []
              },
              {
                name: "OrderTime",
                type: "datetime",
                required: true,
                description: "Bet order time",
                restriction: [],
                schema: []
              },
              {
                name: "TransGuid",
                type: "string",
                required: true,
                description: "Bet transguid. Bet request and Settle request using same TransGuid",
                restriction: [],
                schema: []
              },
              {
                name: "Stake",
                type: "decimal",
                required: true,
                description: "how much user bet",
                restriction: [],
                schema: []
              },
              {
                name: "ProviderId",
                type: "int",
                required: true,
                description: "Game provider Id on 12live",
                restriction: [],
                schema: []
              },
              {
                name: "GameId",
                type: "string",
                required: true,
                description: "Round Id of game",
                restriction: [],
                schema: []
              },
              {
                name: "ProductType",
                type: "string",
                required: true,
                description: "Game name or Game code",
                restriction: [],
                schema: []
              },
              {
                name: "GameType",
                type: "string",
                required: true,
                description: "Type of game like : Slot, Live..",
                restriction: [],
                schema: []
              },
              {
                name: "TableName",
                type: "string",
                required: true,
                description: "Table name of casino or Game code/ Game name on slot..",
                restriction: [],
                schema: []
              },
              {
                name: "PlayType",
                type: "string",
                required: false,
                description: "Bet choose. Ex: Banker or Player on casino or Gate choose",
                restriction: [],
                schema: []
              },
              {
                name: "ExtraData",
                type: "string",
                required: false,
                description: "game provider info",
                restriction: [],
                schema: []
              },
              {
                name: "BetType",
                type: "string",
                required: false,
                description: "",
                restriction: [],
                schema: []
              }
              
            ]
          }
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
                    name: "error",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "balance",
                    type: "string",
                    required: false,
                    description: "10000.23",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          },
          {
            code: 500,
            message: "InternalServer",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "string",
                    required: false,
                    description: "1 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "corresponding message",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Response samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "ApiKey":"{{api_key}}",
              "action":"bet",
              "data":[
              {
              "UserId":9088330,
              "UserName":"001",
              "OrderTime":"2024-05-02T08:44:56.840Z",
              "TransGuid":"mm-142540802",
              "Stake":3.0,
              "ProviderId":11,
              "ParentId":3857816,
              "GameId":"142540802",
              "ProductType":"League Of Legends",
              "GameType":"Slot",
              "TableName":"54",
              "PlayType":"",
              "ExtraData":"",
              "BetType":"" 
              }
            ]
          }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "balance":45491.45,
              "error":0,
              "message":null,
              "data":[
                {
                "userId":"9088330",
                "transId":"mm-142540802",
                "balance":45491.45,
                "error":0,
                "message":null,
                "dup":false
                }
              ],
              "statementDate":null
              }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": "corresponding message",
              // "error1": 10, //balance not enough
              // "error2": 1031, //system error
              },
              
          }
        ]
      },
      {
        title: "Cancel Bet",
        id: "cancel_bet_pgsoft",
        type: ApiEnum.POST,
        endpoint: "",
        description: "Sending bet information to single wallet site 1. When place bet has failure will call 'Cancel Bet'. 2. When cancel bet is unsuccessful will schedule a job to repeat it until success.",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "ApiKey",
                type: "string",
                required: true,
                description: "The key pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema: []
              },
              {
                name: "action",
                type: "string",
                required: true,
                description: "bet",
                restriction: [],
                schema: []
              },
              {
                name: "userId",
                type: "string",
                required: true,
                description: "userId in 12live system",
                restriction: [],
                schema: []
              },
              {
                name: "userName",
                type: "string",
                required: true,
                description: "Player username",
                restriction: [],
                schema: []
              },
              {
                name: "OrderTime",
                type: "datetime",
                required: true,
                description: "Bet order time",
                restriction: [],
                schema: []
              },
              {
                name: "TransGuid",
                type: "string",
                required: true,
                description: "Bet transguid. Bet request and Settle request using same TransGuid",
                restriction: [],
                schema: []
              },
              {
                name: "Stake",
                type: "decimal",
                required: true,
                description: "how much user bet",
                restriction: [],
                schema: []
              },
              {
                name: "ProviderId",
                type: "int",
                required: true,
                description: "Game provider Id on 12live",
                restriction: [],
                schema: []
              },
              {
                name: "GameId",
                type: "string",
                required: true,
                description: "Round Id of game",
                restriction: [],
                schema: []
              },
              {
                name: "ProductType",
                type: "string",
                required: true,
                description: "Game name or Game code",
                restriction: [],
                schema: []
              },
              {
                name: "GameType",
                type: "string",
                required: true,
                description: "Type of game like : Slot, Live..",
                restriction: [],
                schema: []
              },
              {
                name: "TableName",
                type: "string",
                required: true,
                description: "Table name of casino or Game code/ Game name on slot..",
                restriction: [],
                schema: []
              },
              {
                name: "PlayType",
                type: "string",
                required: false,
                description: "Bet choose. Ex: Banker or Player on casino or Gate choose",
                restriction: [],
                schema: []
              },
              {
                name: "ExtraData",
                type: "string",
                required: false,
                description: "game provider info",
                restriction: [],
                schema: []
              },
              {
                name: "BetType",
                type: "string",
                required: false,
                description: "",
                restriction: [],
                schema: []
              }
              
            ]
          }
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
                    name: "error",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "balance",
                    type: "string",
                    required: false,
                    description: "10000.23",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          },
          {
            code: 500,
            message: "InternalServer",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "string",
                    required: false,
                    description: "1 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "corresponding message",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Response samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "ApiKey":"{{api_key}}",
              "action":"cancelBet",
              "data":[
                {
                "UserId": 9088330, 
                "UserName": "003", 
                "OrderTime": "2024-05-02T08:44:56.840Z", 
                "TransGuid": "mm-142540802", 
                "Stake": 3.00, 
                "ProviderId": 11, 
                "GameId": "142540802", 
                "ProductType": "League Of Legends", 
                "GameType": "Slot", 
                "TableName": "54",
                "PlayType": "",
                "ExtraData": "",
                "BetType": ""
                }
              ]
            }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "",
              "balance": 45491.45,
              "data":[
                {
                "error": 0, 
                "transId": "mm-142540802", 
                "userId": 9088330, 
                "balance": 45491.45,
                }
              ]
            }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": "corresponding message",
              }
          }
        ]
      },
      {
        title: "Settle Bet",
        id: "settle_bet_pgsoft",
        type: ApiEnum.POST,
        endpoint: "",
        description: "Sending transactions when had settled.",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "ApiKey",
                type: "string",
                required: true,
                description: "The key pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema: []
              },
              {
                name: "action",
                type: "string",
                required: true,
                description: "bet",
                restriction: [],
                schema: []
              },
              {
                name: "userId",
                type: "string",
                required: true,
                description: "userId in 12live system",
                restriction: [],
                schema: []
              },
              {
                name: "userName",
                type: "string",
                required: true,
                description: "Player username",
                restriction: [],
                schema: []
              },
              {
                name: "OrderTime",
                type: "datetime",
                required: true,
                description: "Bet order time",
                restriction: [],
                schema: []
              },
              {
                name: "TransGuid",
                type: "string",
                required: true,
                description: "Bet transguid. Bet request and Settle request using same TransGuid",
                restriction: [],
                schema: []
              },
              {
                name: "Stake",
                type: "decimal",
                required: true,
                description: "how much user bet",
                restriction: [],
                schema: []
              },
              {
                name: "Winlost",
                type: "decimal",
                required: true,
                description: "Player winlost (included Stake)",
                restriction: [],
                schema: []
              },
              {
                name: "TurnOver",
                type: "decimal",
                required: true,
                description: "",
                restriction: [],
                schema: []
              },
              {
                name: "ProviderId",
                type: "int",
                required: true,
                description: "Game provider Id on 12live",
                restriction: [],
                schema: []
              },
              {
                name: "Provider",
                type: "string",
                required: false,
                description: "Provider name",
                restriction: [],
                schema: []
              },
              {
                name: "GameId",
                type: "string",
                required: true,
                description: "Round Id of game",
                restriction: [],
                schema: []
              },
              {
                name: "ProductType",
                type: "string",
                required: true,
                description: "Game name or Game code",
                restriction: [],
                schema: []
              },
              {
                name: "GameType",
                type: "string",
                required: true,
                description: "Type of game like : Slot, Live..",
                restriction: [],
                schema: []
              },
              {
                name: "TableName",
                type: "string",
                required: true,
                description: "Table name of casino or Game code/ Game name on slot..",
                restriction: [],
                schema: []
              },
              {
                name: "PlayType",
                type: "string",
                required: true,
                description: "Bet choose. Ex: Banker or Player on casino or Gate choose",
                restriction: [],
                schema: []
              },
              {
                name: "ModifyDate",
                type: "datetime",
                required: true,
                description: "Modify date in case resettle we can know when this record resettle.",
                restriction: [],
                schema: []
              },
              {
                name: "WinloseDate",
                type: "datetime",
                required: true,
                description: "Winlose time",
                restriction: [],
                schema: []
              },
              {
                name: "Status",
                type: "String",
                required: true,
                description: "CurrentStatus",
                restriction: [],
                schema: []
              },
              {
                name: "ProviderStatus",
                type: "String",
                required: false,
                description: "Reference provider status",
                restriction: [],
                schema: []
              },
              {
                name: "EndRound",
                type: "boolean",
                required: true,
                description: "Is this settle end of round",
                restriction: [],
                schema: []
              },
              {
                name: "BetType",
                type: "String",
                required: false,
                description: "Bet type",
                restriction: [],
                schema: []
              },
              {
                name: "ReferenceTrans",
                type: "String",
                required: false,
                description: "Reference tranguid",
                restriction: [],
                schema: []
              },
            ]
          }
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
                    name: "error",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "balance",
                    type: "string",
                    required: false,
                    description: "10000.23",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          },
          {
            code: 500,
            message: "InternalServer",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "string",
                    required: false,
                    description: "1 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "corresponding message",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Response samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "ApiKey":"{{api_key}}",
              "action":"settle",
              "data": [
                {
                  "UserId": 9088328,
                  "UserName": "001",
                  "OrderTime": "2024-06-10T04:44:39.930Z",
                  "TransGuid": "1800026269325341696-1800026269325341696-101-0",
                  "Stake": 4.00,
                  "ActualStake": 4.00,
                  "Winlost": 1.20,
                  "TurnOver": 4.00,
                  "Profit": -2.80,
                  "ModifyDate": "2024-06-10T04:44:40.373Z",
                  "WinloseDate": "2024-06-10T04:44:40.373Z",
                  "GameType": "Slot",
                  "GameId": "1800026269325341696",
                  "ProductType": "71",
                  "TableName": "71",
                  "Status": "Settled",
                  "ProviderStatus": "Lose",
                  "Provider": "PG Soft",
                  "ProviderId": 11,
                  "CancelType": 0,
                  "ExtraData": "",
                  "BetType": "",
                  "ReferenceTrans": "",
                  "EndRound": true
                }
              ],
            }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
                "balance":45494.45,
                "error":0,
                "message":null,
                "data":[
                {
                "userId":"9088330",
                "transId":"mm-142540802",
                "balance":45494.45,
                "error":0,
                "message":null,
                "dup":false
                }
              ],
              "statementDate":null
              }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": "corresponding message",
              }
          }
        ]
      },
    ]
  },
  {
    title:"EvoPlay",
    id: "evoplay",
    api:[
      {
        title: "Get Balance",
        id: "get_balance_evoplay",
        type: ApiEnum.POST,
        endpoint: "",
        description: "Sync player’s balance periodically",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "ApiKey",
                type: "string",
                required: true,
                description: "The key pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema: []
              },
              {
                name: "action",
                type: "string",
                required: true,
                description: "Notice: we will send the exact value `getBalance` ",
                restriction: [],
                schema: []
              },
              {
                name: "userId",
                type: "string",
                required: false,
                description: "userId in 12live system",
                restriction: [],
                schema: []
              },
              {
                name: "userName",
                type: "string",
                required: true,
                description: "Player username",
                restriction: [],
                schema: []
              }
            ]
          }
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
                    name: "error",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "10000.23",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          },
          {
            code: 500,
            message: "InternalServer",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "string",
                    required: false,
                    description: "1 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "corresponding message",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Response samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "ApiKey":"{{api_key}}",
              "action":"getBalance",
              "userId": 9088330,
              "userName":" 003",
              }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "",
              "balance": 45491.45
              }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": "corresponding message"
              }
          }
        ]
      },
      {
        title: "Place Bet",
        id: "place_bet_evoplay",
        type: ApiEnum.POST,
        endpoint: "",
        description: "Sending bet information to single wallet site 1. Every bet request response must include 'balance' parameter to update player balance on the page. 2. Current status of bet transaction is unsettled. 3. Any bet failure occurred will trigger 'Cancel Bet' function to cancel this transaction.",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "ApiKey",
                type: "string",
                required: true,
                description: "The key pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema: []
              },
              {
                name: "action",
                type: "string",
                required: true,
                description: "bet",
                restriction: [],
                schema: []
              },
              {
                name: "userId",
                type: "string",
                required: true,
                description: "userId in 12live system",
                restriction: [],
                schema: []
              },
              {
                name: "userName",
                type: "string",
                required: true,
                description: "Player username",
                restriction: [],
                schema: []
              },
              {
                name: "OrderTime",
                type: "datetime",
                required: true,
                description: "Bet order time",
                restriction: [],
                schema: []
              },
              {
                name: "TransGuid",
                type: "string",
                required: true,
                description: "Bet transguid. Bet request and Settle request using same TransGuid",
                restriction: [],
                schema: []
              },
              {
                name: "Stake",
                type: "decimal",
                required: true,
                description: "how much user bet",
                restriction: [],
                schema: []
              },
              {
                name: "ProviderId",
                type: "int",
                required: true,
                description: "Game provider Id on 12live",
                restriction: [],
                schema: []
              },
              {
                name: "GameId",
                type: "string",
                required: true,
                description: "Round Id of game",
                restriction: [],
                schema: []
              },
              {
                name: "ProductType",
                type: "string",
                required: true,
                description: "Game name or Game code",
                restriction: [],
                schema: []
              },
              {
                name: "GameType",
                type: "string",
                required: true,
                description: "Type of game like : Slot, Live..",
                restriction: [],
                schema: []
              },
              {
                name: "TableName",
                type: "string",
                required: true,
                description: "Table name of casino or Game code/ Game name on slot..",
                restriction: [],
                schema: []
              },
              {
                name: "PlayType",
                type: "string",
                required: false,
                description: "Bet choose. Ex: Banker or Player on casino or Gate choose",
                restriction: [],
                schema: []
              },
              {
                name: "ExtraData",
                type: "string",
                required: false,
                description: "game provider info",
                restriction: [],
                schema: []
              },
              {
                name: "BetType",
                type: "string",
                required: false,
                description: "",
                restriction: [],
                schema: []
              }
              
            ]
          }
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
                    name: "error",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "balance",
                    type: "string",
                    required: false,
                    description: "10000.23",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          },
          {
            code: 500,
            message: "InternalServer",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "string",
                    required: false,
                    description: "1 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "corresponding message",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Response samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "ApiKey":"{{api_key}}",
              "action":"bet",
              "data":[
              {
              "UserId":9088330,
              "UserName":"001",
              "OrderTime":"2024-05-02T08:44:56.840Z",
              "TransGuid":"mm-142540802",
              "Stake":3.0,
              "ProviderId":17,
              "ParentId":3857816,
              "GameId":"142540802",
              "ProductType":"League Of Legends",
              "GameType":"Slot",
              "TableName":"54",
              "PlayType":"",
              "ExtraData":"",
              "BetType":"" 
              }
            ]
          }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "balance":45491.45,
              "error":0,
              "message":null,
              "data":[
                {
                "userId":"9088330",
                "transId":"mm-142540802",
                "balance":45491.45,
                "error":0,
                "message":null,
                "dup":false
                }
              ],
              "statementDate":null
              }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": "corresponding message",
              // "error1": 10, //balance not enough
              // "error2": 1031, //system error
              },
              
          }
        ]
      },
      {
        title: "Cancel Bet",
        id: "cancel_bet_evoplay",
        type: ApiEnum.POST,
        endpoint: "",
        description: "Sending bet information to single wallet site 1. When place bet has failure will call 'Cancel Bet'. 2. When cancel bet is unsuccessful will schedule a job to repeat it until success.",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "ApiKey",
                type: "string",
                required: true,
                description: "The key pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema: []
              },
              {
                name: "action",
                type: "string",
                required: true,
                description: "bet",
                restriction: [],
                schema: []
              },
              {
                name: "userId",
                type: "string",
                required: true,
                description: "userId in 12live system",
                restriction: [],
                schema: []
              },
              {
                name: "userName",
                type: "string",
                required: true,
                description: "Player username",
                restriction: [],
                schema: []
              },
              {
                name: "OrderTime",
                type: "datetime",
                required: true,
                description: "Bet order time",
                restriction: [],
                schema: []
              },
              {
                name: "TransGuid",
                type: "string",
                required: true,
                description: "Bet transguid. Bet request and Settle request using same TransGuid",
                restriction: [],
                schema: []
              },
              {
                name: "Stake",
                type: "decimal",
                required: true,
                description: "how much user bet",
                restriction: [],
                schema: []
              },
              {
                name: "ProviderId",
                type: "int",
                required: true,
                description: "Game provider Id on 12live",
                restriction: [],
                schema: []
              },
              {
                name: "GameId",
                type: "string",
                required: true,
                description: "Round Id of game",
                restriction: [],
                schema: []
              },
              {
                name: "ProductType",
                type: "string",
                required: true,
                description: "Game name or Game code",
                restriction: [],
                schema: []
              },
              {
                name: "GameType",
                type: "string",
                required: true,
                description: "Type of game like : Slot, Live..",
                restriction: [],
                schema: []
              },
              {
                name: "TableName",
                type: "string",
                required: true,
                description: "Table name of casino or Game code/ Game name on slot..",
                restriction: [],
                schema: []
              },
              {
                name: "PlayType",
                type: "string",
                required: false,
                description: "Bet choose. Ex: Banker or Player on casino or Gate choose",
                restriction: [],
                schema: []
              },
              {
                name: "ExtraData",
                type: "string",
                required: false,
                description: "game provider info",
                restriction: [],
                schema: []
              },
              {
                name: "BetType",
                type: "string",
                required: false,
                description: "",
                restriction: [],
                schema: []
              }
              
            ]
          }
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
                    name: "error",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "balance",
                    type: "string",
                    required: false,
                    description: "10000.23",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          },
          {
            code: 500,
            message: "InternalServer",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "string",
                    required: false,
                    description: "1 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "corresponding message",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Response samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "ApiKey":"{{api_key}}",
              "action":"cancelBet",
              "data":[
                {
                "UserId": 9088330, 
                "UserName": "003", 
                "OrderTime": "2024-05-02T08:44:56.840Z", 
                "TransGuid": "mm-142540802", 
                "Stake": 3.00, 
                "ProviderId": 17, 
                "GameId": "142540802", 
                "ProductType": "League Of Legends", 
                "GameType": "Slot", 
                "TableName": "54",
                "PlayType": "",
                "ExtraData": "",
                "BetType": ""
                }
              ]
            }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "",
              "balance": 45491.45,
              "data":[
                {
                "error": 0, 
                "transId": "mm-142540802", 
                "userId": 9088330, 
                "balance": 45491.45,
                }
              ]
            }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": "corresponding message",
              }
          }
        ]
      },
      {
        title: "Settle Bet",
        id: "settle_bet_evoplay",
        type: ApiEnum.POST,
        endpoint: "",
        description: "Sending transactions when had settled.",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "ApiKey",
                type: "string",
                required: true,
                description: "The key pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema: []
              },
              {
                name: "action",
                type: "string",
                required: true,
                description: "bet",
                restriction: [],
                schema: []
              },
              {
                name: "userId",
                type: "string",
                required: true,
                description: "userId in 12live system",
                restriction: [],
                schema: []
              },
              {
                name: "userName",
                type: "string",
                required: true,
                description: "Player username",
                restriction: [],
                schema: []
              },
              {
                name: "OrderTime",
                type: "datetime",
                required: true,
                description: "Bet order time",
                restriction: [],
                schema: []
              },
              {
                name: "TransGuid",
                type: "string",
                required: true,
                description: "Bet transguid. Bet request and Settle request using same TransGuid",
                restriction: [],
                schema: []
              },
              {
                name: "Stake",
                type: "decimal",
                required: true,
                description: "how much user bet",
                restriction: [],
                schema: []
              },
              {
                name: "Winlost",
                type: "decimal",
                required: true,
                description: "Player winlost (included Stake)",
                restriction: [],
                schema: []
              },
              {
                name: "TurnOver",
                type: "decimal",
                required: true,
                description: "",
                restriction: [],
                schema: []
              },
              {
                name: "ProviderId",
                type: "int",
                required: true,
                description: "Game provider Id on 12live",
                restriction: [],
                schema: []
              },
              {
                name: "Provider",
                type: "string",
                required: false,
                description: "Provider name",
                restriction: [],
                schema: []
              },
              {
                name: "GameId",
                type: "string",
                required: true,
                description: "Round Id of game",
                restriction: [],
                schema: []
              },
              {
                name: "ProductType",
                type: "string",
                required: true,
                description: "Game name or Game code",
                restriction: [],
                schema: []
              },
              {
                name: "GameType",
                type: "string",
                required: true,
                description: "Type of game like : Slot, Live..",
                restriction: [],
                schema: []
              },
              {
                name: "TableName",
                type: "string",
                required: true,
                description: "Table name of casino or Game code/ Game name on slot..",
                restriction: [],
                schema: []
              },
              {
                name: "PlayType",
                type: "string",
                required: true,
                description: "Bet choose. Ex: Banker or Player on casino or Gate choose",
                restriction: [],
                schema: []
              },
              {
                name: "ModifyDate",
                type: "datetime",
                required: true,
                description: "Modify date in case resettle we can know when this record resettle.",
                restriction: [],
                schema: []
              },
              {
                name: "WinloseDate",
                type: "datetime",
                required: true,
                description: "Winlose time",
                restriction: [],
                schema: []
              },
              {
                name: "Status",
                type: "String",
                required: true,
                description: "CurrentStatus",
                restriction: [],
                schema: []
              },
              {
                name: "ProviderStatus",
                type: "String",
                required: false,
                description: "Reference provider status",
                restriction: [],
                schema: []
              },
              {
                name: "EndRound",
                type: "boolean",
                required: true,
                description: "Is this settle end of round",
                restriction: [],
                schema: []
              },
              {
                name: "BetType",
                type: "String",
                required: false,
                description: "Bet type",
                restriction: [],
                schema: []
              },
              {
                name: "ReferenceTrans",
                type: "String",
                required: false,
                description: "Reference tranguid",
                restriction: [],
                schema: []
              },
            ]
          }
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
                    name: "error",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "balance",
                    type: "string",
                    required: false,
                    description: "10000.23",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          },
          {
            code: 500,
            message: "InternalServer",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "string",
                    required: false,
                    description: "1 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "corresponding message",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Response samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "ApiKey":"{{api_key}}",
              "action":"settle",
              "data":[
                {
                "UserId":9088330,
                "UserName":"001",
                "OrderTime":"2024-05-02T08:44:56.840Z",
                "TransGuid":"mm-142540802",
                "Stake":0.0,
                "ActualStake":0.0,
                "Winlost":3.0,
                "TurnOver":0.0,
                "Profit":3.0,
                "ModifyDate":"2024-05-02T08:44:56.920Z",
                "WinloseDate":"2024-05-02T08:44:56.920Z",
                "GameType":"Slot",
                "GameId":"142540802",
                "ProductType":"League Of Legends",
                "TableName":"54",
                "Status":"Settled",
                "ProviderStatus":"Settled",
                "Provider":"Mimi",
                "ProviderId":8,
                "CancelType":0,
                "ExtraData":"",
                "BetType":"",
                "ReferenceTrans":"",
                "EndRound":true
                }
              ]
            }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
                "balance":45494.45,
                "error":0,
                "message":null,
                "data":[
                {
                "userId":"9088330",
                "transId":"mm-142540802",
                "balance":45494.45,
                "error":0,
                "message":null,
                "dup":false
                }
              ],
              "statementDate":null
              }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": "corresponding message",
              }
          }
        ]
      },
    ]
  },
  {
    title:"Jili",
    id: "jili",
    api:[
      {
        title: "Get Balance",
        id: "get_balance_jili",
        type: ApiEnum.POST,
        endpoint: "",
        description: "Sync player’s balance periodically",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "ApiKey",
                type: "string",
                required: true,
                description: "The key pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema: []
              },
              {
                name: "action",
                type: "string",
                required: true,
                description: "Notice: we will send the exact value `getBalance` ",
                restriction: [],
                schema: []
              },
              {
                name: "userId",
                type: "string",
                required: false,
                description: "userId in 12live system",
                restriction: [],
                schema: []
              },
              {
                name: "userName",
                type: "string",
                required: true,
                description: "Player username",
                restriction: [],
                schema: []
              }
            ]
          }
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
                    name: "error",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "10000.23",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          },
          {
            code: 500,
            message: "InternalServer",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "string",
                    required: false,
                    description: "1 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "corresponding message",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Response samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "ApiKey":"{{api_key}}",
              "action":"getBalance",
              "userId": 9088330,
              "userName":" 003",
              }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "",
              "balance": 45491.45
              }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": "corresponding message"
              }
          }
        ]
      },
      {
        title: "Place Bet",
        id: "place_bet_jili",
        type: ApiEnum.POST,
        endpoint: "",
        description: "Sending bet information to single wallet site 1. Every bet request response must include 'balance' parameter to update player balance on the page. 2. Current status of bet transaction is unsettled. 3. Any bet failure occurred will trigger 'Cancel Bet' function to cancel this transaction.",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "ApiKey",
                type: "string",
                required: true,
                description: "The key pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema: []
              },
              {
                name: "action",
                type: "string",
                required: true,
                description: "bet",
                restriction: [],
                schema: []
              },
              {
                name: "userId",
                type: "string",
                required: true,
                description: "userId in 12live system",
                restriction: [],
                schema: []
              },
              {
                name: "userName",
                type: "string",
                required: true,
                description: "Player username",
                restriction: [],
                schema: []
              },
              {
                name: "OrderTime",
                type: "datetime",
                required: true,
                description: "Bet order time",
                restriction: [],
                schema: []
              },
              {
                name: "TransGuid",
                type: "string",
                required: true,
                description: "Bet transguid. Bet request and Settle request using same TransGuid",
                restriction: [],
                schema: []
              },
              {
                name: "Stake",
                type: "decimal",
                required: true,
                description: "how much user bet",
                restriction: [],
                schema: []
              },
              {
                name: "ProviderId",
                type: "int",
                required: true,
                description: "Game provider Id on 12live",
                restriction: [],
                schema: []
              },
              {
                name: "GameId",
                type: "string",
                required: true,
                description: "Round Id of game",
                restriction: [],
                schema: []
              },
              {
                name: "ProductType",
                type: "string",
                required: true,
                description: "Game name or Game code",
                restriction: [],
                schema: []
              },
              {
                name: "GameType",
                type: "string",
                required: true,
                description: "Type of game like : Slot, Live..",
                restriction: [],
                schema: []
              },
              {
                name: "TableName",
                type: "string",
                required: true,
                description: "Table name of casino or Game code/ Game name on slot..",
                restriction: [],
                schema: []
              },
              {
                name: "PlayType",
                type: "string",
                required: false,
                description: "Bet choose. Ex: Banker or Player on casino or Gate choose",
                restriction: [],
                schema: []
              },
              {
                name: "ExtraData",
                type: "string",
                required: false,
                description: "game provider info",
                restriction: [],
                schema: []
              },
              {
                name: "BetType",
                type: "string",
                required: false,
                description: "",
                restriction: [],
                schema: []
              }
              
            ]
          }
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
                    name: "error",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "balance",
                    type: "string",
                    required: false,
                    description: "10000.23",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          },
          {
            code: 500,
            message: "InternalServer",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "string",
                    required: false,
                    description: "1 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "corresponding message",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Response samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "ApiKey":"{{api_key}}",
              "action":"bet",
              "data":[
              {
              "UserId":9088330,
              "UserName":"001",
              "OrderTime":"2024-05-02T08:44:56.840Z",
              "TransGuid":"mm-142540802",
              "Stake":3.0,
              "ProviderId":17,
              "ParentId":3857816,
              "GameId":"142540802",
              "ProductType":"League Of Legends",
              "GameType":"Slot",
              "TableName":"54",
              "PlayType":"",
              "ExtraData":"",
              "BetType":"" 
              }
            ]
          }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "balance":45491.45,
              "error":0,
              "message":null,
              "data":[
                {
                "userId":"9088330",
                "transId":"mm-142540802",
                "balance":45491.45,
                "error":0,
                "message":null,
                "dup":false
                }
              ],
              "statementDate":null
              }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": "corresponding message",
              // "error1": 10, //balance not enough
              // "error2": 1031, //system error
              },
              
          }
        ]
      },
      {
        title: "Cancel Bet",
        id: "cancel_bet_jili",
        type: ApiEnum.POST,
        endpoint: "",
        description: "Sending bet information to single wallet site 1. When place bet has failure will call 'Cancel Bet'. 2. When cancel bet is unsuccessful will schedule a job to repeat it until success.",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "ApiKey",
                type: "string",
                required: true,
                description: "The key pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema: []
              },
              {
                name: "action",
                type: "string",
                required: true,
                description: "bet",
                restriction: [],
                schema: []
              },
              {
                name: "userId",
                type: "string",
                required: true,
                description: "userId in 12live system",
                restriction: [],
                schema: []
              },
              {
                name: "userName",
                type: "string",
                required: true,
                description: "Player username",
                restriction: [],
                schema: []
              },
              {
                name: "OrderTime",
                type: "datetime",
                required: true,
                description: "Bet order time",
                restriction: [],
                schema: []
              },
              {
                name: "TransGuid",
                type: "string",
                required: true,
                description: "Bet transguid. Bet request and Settle request using same TransGuid",
                restriction: [],
                schema: []
              },
              {
                name: "Stake",
                type: "decimal",
                required: true,
                description: "how much user bet",
                restriction: [],
                schema: []
              },
              {
                name: "ProviderId",
                type: "int",
                required: true,
                description: "Game provider Id on 12live",
                restriction: [],
                schema: []
              },
              {
                name: "GameId",
                type: "string",
                required: true,
                description: "Round Id of game",
                restriction: [],
                schema: []
              },
              {
                name: "ProductType",
                type: "string",
                required: true,
                description: "Game name or Game code",
                restriction: [],
                schema: []
              },
              {
                name: "GameType",
                type: "string",
                required: true,
                description: "Type of game like : Slot, Live..",
                restriction: [],
                schema: []
              },
              {
                name: "TableName",
                type: "string",
                required: true,
                description: "Table name of casino or Game code/ Game name on slot..",
                restriction: [],
                schema: []
              },
              {
                name: "PlayType",
                type: "string",
                required: false,
                description: "Bet choose. Ex: Banker or Player on casino or Gate choose",
                restriction: [],
                schema: []
              },
              {
                name: "ExtraData",
                type: "string",
                required: false,
                description: "game provider info",
                restriction: [],
                schema: []
              },
              {
                name: "BetType",
                type: "string",
                required: false,
                description: "",
                restriction: [],
                schema: []
              }
              
            ]
          }
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
                    name: "error",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "balance",
                    type: "string",
                    required: false,
                    description: "10000.23",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          },
          {
            code: 500,
            message: "InternalServer",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "string",
                    required: false,
                    description: "1 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "corresponding message",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Response samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "ApiKey":"{{api_key}}",
              "action":"cancelBet",
              "data":[
                {
                "UserId": 9088330, 
                "UserName": "003", 
                "OrderTime": "2024-05-02T08:44:56.840Z", 
                "TransGuid": "mm-142540802", 
                "Stake": 3.00, 
                "ProviderId": 17, 
                "GameId": "142540802", 
                "ProductType": "League Of Legends", 
                "GameType": "Slot", 
                "TableName": "54",
                "PlayType": "",
                "ExtraData": "",
                "BetType": ""
                }
              ]
            }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "",
              "balance": 45491.45,
              "data":[
                {
                "error": 0, 
                "transId": "mm-142540802", 
                "userId": 9088330, 
                "balance": 45491.45,
                }
              ]
            }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": "corresponding message",
              }
          }
        ]
      },
      {
        title: "Settle Bet",
        id: "settle_bet_jili",
        type: ApiEnum.POST,
        endpoint: "",
        description: "Sending transactions when had settled.",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "ApiKey",
                type: "string",
                required: true,
                description: "The key pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema: []
              },
              {
                name: "action",
                type: "string",
                required: true,
                description: "bet",
                restriction: [],
                schema: []
              },
              {
                name: "userId",
                type: "string",
                required: true,
                description: "userId in 12live system",
                restriction: [],
                schema: []
              },
              {
                name: "userName",
                type: "string",
                required: true,
                description: "Player username",
                restriction: [],
                schema: []
              },
              {
                name: "OrderTime",
                type: "datetime",
                required: true,
                description: "Bet order time",
                restriction: [],
                schema: []
              },
              {
                name: "TransGuid",
                type: "string",
                required: true,
                description: "Bet transguid. Bet request and Settle request using same TransGuid",
                restriction: [],
                schema: []
              },
              {
                name: "Stake",
                type: "decimal",
                required: true,
                description: "how much user bet",
                restriction: [],
                schema: []
              },
              {
                name: "Winlost",
                type: "decimal",
                required: true,
                description: "Player winlost (included Stake)",
                restriction: [],
                schema: []
              },
              {
                name: "TurnOver",
                type: "decimal",
                required: true,
                description: "",
                restriction: [],
                schema: []
              },
              {
                name: "ProviderId",
                type: "int",
                required: true,
                description: "Game provider Id on 12live",
                restriction: [],
                schema: []
              },
              {
                name: "Provider",
                type: "string",
                required: false,
                description: "Provider name",
                restriction: [],
                schema: []
              },
              {
                name: "GameId",
                type: "string",
                required: true,
                description: "Round Id of game",
                restriction: [],
                schema: []
              },
              {
                name: "ProductType",
                type: "string",
                required: true,
                description: "Game name or Game code",
                restriction: [],
                schema: []
              },
              {
                name: "GameType",
                type: "string",
                required: true,
                description: "Type of game like : Slot, Live..",
                restriction: [],
                schema: []
              },
              {
                name: "TableName",
                type: "string",
                required: true,
                description: "Table name of casino or Game code/ Game name on slot..",
                restriction: [],
                schema: []
              },
              {
                name: "PlayType",
                type: "string",
                required: true,
                description: "Bet choose. Ex: Banker or Player on casino or Gate choose",
                restriction: [],
                schema: []
              },
              {
                name: "ModifyDate",
                type: "datetime",
                required: true,
                description: "Modify date in case resettle we can know when this record resettle.",
                restriction: [],
                schema: []
              },
              {
                name: "WinloseDate",
                type: "datetime",
                required: true,
                description: "Winlose time",
                restriction: [],
                schema: []
              },
              {
                name: "Status",
                type: "String",
                required: true,
                description: "CurrentStatus",
                restriction: [],
                schema: []
              },
              {
                name: "ProviderStatus",
                type: "String",
                required: false,
                description: "Reference provider status",
                restriction: [],
                schema: []
              },
              {
                name: "EndRound",
                type: "boolean",
                required: true,
                description: "Is this settle end of round",
                restriction: [],
                schema: []
              },
              {
                name: "BetType",
                type: "String",
                required: false,
                description: "Bet type",
                restriction: [],
                schema: []
              },
              {
                name: "ReferenceTrans",
                type: "String",
                required: false,
                description: "Reference tranguid",
                restriction: [],
                schema: []
              },
            ]
          }
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
                    name: "error",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "balance",
                    type: "string",
                    required: false,
                    description: "10000.23",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          },
          {
            code: 500,
            message: "InternalServer",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "string",
                    required: false,
                    description: "1 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "corresponding message",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Response samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "ApiKey":"{{api_key}}",
              "action":"settle",
              "data": [
                {
                  "UserId": 9088328,
                  "UserName": "001",
                  "OrderTime": "2024-06-10T04:03:19.589Z",
                  "TransGuid": "394eea5e-8370-4551-852b-4b57b4fcf7e3",
                  "Stake": 2.0,
                  "ActualStake": 2.0,
                  "Winlost": 0.0,
                  "TurnOver": 2.0,
                  "Profit": -2.0,
                  "ModifyDate": "2024-06-10T04:03:19.996Z",
                  "WinloseDate": "2024-06-10T04:03:19.996Z",
                  "GameType": "Slot",
                  "GameId": "1717653373654858137",
                  "ProductType": "137",
                  "TableName": "137",
                  "Status": "Settled",
                  "ProviderStatus": "Settled",
                  "Provider": "17",
                  "ProviderId": 17,
                  "CancelType": 0,
                  "ExtraData": "",
                  "BetType": "",
                  "ReferenceTrans": "",
                  "EndRound": true
                }
              ],
            }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
                "balance":45494.45,
                "error":0,
                "message":null,
                "data":[
                {
                "userId":"9088330",
                "transId":"mm-142540802",
                "balance":45494.45,
                "error":0,
                "message":null,
                "dup":false
                }
              ],
              "statementDate":null
              }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": "corresponding message",
              }
          }
        ]
      },
    ]
  },
  {
    title:"Red Tiger",
    id: "red_tiger",
    api:[
      {
        title: "Get Balance",
        id: "get_balance_red_tiger",
        type: ApiEnum.POST,
        endpoint: "",
        description: "Sync player’s balance periodically",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "ApiKey",
                type: "string",
                required: true,
                description: "The key pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema: []
              },
              {
                name: "action",
                type: "string",
                required: true,
                description: "Notice: we will send the exact value `getBalance` ",
                restriction: [],
                schema: []
              },
              {
                name: "userId",
                type: "string",
                required: false,
                description: "userId in 12live system",
                restriction: [],
                schema: []
              },
              {
                name: "userName",
                type: "string",
                required: true,
                description: "Player username",
                restriction: [],
                schema: []
              }
            ]
          }
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
                    name: "error",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "10000.23",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          },
          {
            code: 500,
            message: "InternalServer",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "string",
                    required: false,
                    description: "1 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "corresponding message",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Response samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "ApiKey":"{{api_key}}",
              "action":"getBalance",
              "userId": 9088330,
              "userName":" 003",
              }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "",
              "balance": 45491.45
              }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": "corresponding message"
              }
          }
        ]
      },
      {
        title: "Place Bet",
        id: "place_bet_red_tiger",
        type: ApiEnum.POST,
        endpoint: "",
        description: "Sending bet information to single wallet site 1. Every bet request response must include 'balance' parameter to update player balance on the page. 2. Current status of bet transaction is unsettled. 3. Any bet failure occurred will trigger 'Cancel Bet' function to cancel this transaction.",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "ApiKey",
                type: "string",
                required: true,
                description: "The key pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema: []
              },
              {
                name: "action",
                type: "string",
                required: true,
                description: "bet",
                restriction: [],
                schema: []
              },
              {
                name: "userId",
                type: "string",
                required: true,
                description: "userId in 12live system",
                restriction: [],
                schema: []
              },
              {
                name: "userName",
                type: "string",
                required: true,
                description: "Player username",
                restriction: [],
                schema: []
              },
              {
                name: "OrderTime",
                type: "datetime",
                required: true,
                description: "Bet order time",
                restriction: [],
                schema: []
              },
              {
                name: "TransGuid",
                type: "string",
                required: true,
                description: "Bet transguid. Bet request and Settle request using same TransGuid",
                restriction: [],
                schema: []
              },
              {
                name: "Stake",
                type: "decimal",
                required: true,
                description: "how much user bet",
                restriction: [],
                schema: []
              },
              {
                name: "ProviderId",
                type: "int",
                required: true,
                description: "Game provider Id on 12live",
                restriction: [],
                schema: []
              },
              {
                name: "GameId",
                type: "string",
                required: true,
                description: "Round Id of game",
                restriction: [],
                schema: []
              },
              {
                name: "ProductType",
                type: "string",
                required: true,
                description: "Game name or Game code",
                restriction: [],
                schema: []
              },
              {
                name: "GameType",
                type: "string",
                required: true,
                description: "Type of game like : Slot, Live..",
                restriction: [],
                schema: []
              },
              {
                name: "TableName",
                type: "string",
                required: true,
                description: "Table name of casino or Game code/ Game name on slot..",
                restriction: [],
                schema: []
              },
              {
                name: "PlayType",
                type: "string",
                required: false,
                description: "Bet choose. Ex: Banker or Player on casino or Gate choose",
                restriction: [],
                schema: []
              },
              {
                name: "ExtraData",
                type: "string",
                required: false,
                description: "game provider info",
                restriction: [],
                schema: []
              },
              {
                name: "BetType",
                type: "string",
                required: false,
                description: "",
                restriction: [],
                schema: []
              }
              
            ]
          }
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
                    name: "error",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "balance",
                    type: "string",
                    required: false,
                    description: "10000.23",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          },
          {
            code: 500,
            message: "InternalServer",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "string",
                    required: false,
                    description: "1 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "corresponding message",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Response samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "ApiKey":"{{api_key}}",
              "action":"bet",
              "data":[
              {
              "UserId":9088330,
              "UserName":"001",
              "OrderTime":"2024-05-02T08:44:56.840Z",
              "TransGuid":"mm-142540802",
              "Stake":3.0,
              "ProviderId":10,
              "ParentId":3857816,
              "GameId":"142540802",
              "ProductType":"League Of Legends",
              "GameType":"Slot",
              "TableName":"54",
              "PlayType":"",
              "ExtraData":"",
              "BetType":"" 
              }
            ]
          }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "balance":45491.45,
              "error":0,
              "message":null,
              "data":[
                {
                "userId":"9088330",
                "transId":"mm-142540802",
                "balance":45491.45,
                "error":0,
                "message":null,
                "dup":false
                }
              ],
              "statementDate":null
              }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": "corresponding message",
              // "error1": 10, //balance not enough
              // "error2": 1031, //system error
              },
              
          }
        ]
      },
      {
        title: "Cancel Bet",
        id: "cancel_bet_red_tiger",
        type: ApiEnum.POST,
        endpoint: "",
        description: "Sending bet information to single wallet site 1. When place bet has failure will call 'Cancel Bet'. 2. When cancel bet is unsuccessful will schedule a job to repeat it until success.",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "ApiKey",
                type: "string",
                required: true,
                description: "The key pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema: []
              },
              {
                name: "action",
                type: "string",
                required: true,
                description: "bet",
                restriction: [],
                schema: []
              },
              {
                name: "userId",
                type: "string",
                required: true,
                description: "userId in 12live system",
                restriction: [],
                schema: []
              },
              {
                name: "userName",
                type: "string",
                required: true,
                description: "Player username",
                restriction: [],
                schema: []
              },
              {
                name: "OrderTime",
                type: "datetime",
                required: true,
                description: "Bet order time",
                restriction: [],
                schema: []
              },
              {
                name: "TransGuid",
                type: "string",
                required: true,
                description: "Bet transguid. Bet request and Settle request using same TransGuid",
                restriction: [],
                schema: []
              },
              {
                name: "Stake",
                type: "decimal",
                required: true,
                description: "how much user bet",
                restriction: [],
                schema: []
              },
              {
                name: "ProviderId",
                type: "int",
                required: true,
                description: "Game provider Id on 12live",
                restriction: [],
                schema: []
              },
              {
                name: "GameId",
                type: "string",
                required: true,
                description: "Round Id of game",
                restriction: [],
                schema: []
              },
              {
                name: "ProductType",
                type: "string",
                required: true,
                description: "Game name or Game code",
                restriction: [],
                schema: []
              },
              {
                name: "GameType",
                type: "string",
                required: true,
                description: "Type of game like : Slot, Live..",
                restriction: [],
                schema: []
              },
              {
                name: "TableName",
                type: "string",
                required: true,
                description: "Table name of casino or Game code/ Game name on slot..",
                restriction: [],
                schema: []
              },
              {
                name: "PlayType",
                type: "string",
                required: false,
                description: "Bet choose. Ex: Banker or Player on casino or Gate choose",
                restriction: [],
                schema: []
              },
              {
                name: "ExtraData",
                type: "string",
                required: false,
                description: "game provider info",
                restriction: [],
                schema: []
              },
              {
                name: "BetType",
                type: "string",
                required: false,
                description: "",
                restriction: [],
                schema: []
              }
              
            ]
          }
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
                    name: "error",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "balance",
                    type: "string",
                    required: false,
                    description: "10000.23",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          },
          {
            code: 500,
            message: "InternalServer",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "string",
                    required: false,
                    description: "1 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "corresponding message",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Response samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "ApiKey":"{{api_key}}",
              "action":"cancelBet",
              "data":[
                {
                "UserId": 9088330, 
                "UserName": "003", 
                "OrderTime": "2024-05-02T08:44:56.840Z", 
                "TransGuid": "mm-142540802", 
                "Stake": 3.00, 
                "ProviderId": 10, 
                "GameId": "142540802", 
                "ProductType": "League Of Legends", 
                "GameType": "Slot", 
                "TableName": "54",
                "PlayType": "",
                "ExtraData": "",
                "BetType": ""
                }
              ]
            }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "",
              "balance": 45491.45,
              "data":[
                {
                "error": 0, 
                "transId": "mm-142540802", 
                "userId": 9088330, 
                "balance": 45491.45,
                }
              ]
            }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": "corresponding message",
              }
          }
        ]
      },
      {
        title: "Settle Bet",
        id: "settle_bet_red_tiger",
        type: ApiEnum.POST,
        endpoint: "",
        description: "Sending transactions when had settled.",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "ApiKey",
                type: "string",
                required: true,
                description: "The key pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema: []
              },
              {
                name: "action",
                type: "string",
                required: true,
                description: "bet",
                restriction: [],
                schema: []
              },
              {
                name: "userId",
                type: "string",
                required: true,
                description: "userId in 12live system",
                restriction: [],
                schema: []
              },
              {
                name: "userName",
                type: "string",
                required: true,
                description: "Player username",
                restriction: [],
                schema: []
              },
              {
                name: "OrderTime",
                type: "datetime",
                required: true,
                description: "Bet order time",
                restriction: [],
                schema: []
              },
              {
                name: "TransGuid",
                type: "string",
                required: true,
                description: "Bet transguid. Bet request and Settle request using same TransGuid",
                restriction: [],
                schema: []
              },
              {
                name: "Stake",
                type: "decimal",
                required: true,
                description: "how much user bet",
                restriction: [],
                schema: []
              },
              {
                name: "Winlost",
                type: "decimal",
                required: true,
                description: "Player winlost (included Stake)",
                restriction: [],
                schema: []
              },
              {
                name: "TurnOver",
                type: "decimal",
                required: true,
                description: "",
                restriction: [],
                schema: []
              },
              {
                name: "ProviderId",
                type: "int",
                required: true,
                description: "Game provider Id on 12live",
                restriction: [],
                schema: []
              },
              {
                name: "Provider",
                type: "string",
                required: false,
                description: "Provider name",
                restriction: [],
                schema: []
              },
              {
                name: "GameId",
                type: "string",
                required: true,
                description: "Round Id of game",
                restriction: [],
                schema: []
              },
              {
                name: "ProductType",
                type: "string",
                required: true,
                description: "Game name or Game code",
                restriction: [],
                schema: []
              },
              {
                name: "GameType",
                type: "string",
                required: true,
                description: "Type of game like : Slot, Live..",
                restriction: [],
                schema: []
              },
              {
                name: "TableName",
                type: "string",
                required: true,
                description: "Table name of casino or Game code/ Game name on slot..",
                restriction: [],
                schema: []
              },
              {
                name: "PlayType",
                type: "string",
                required: true,
                description: "Bet choose. Ex: Banker or Player on casino or Gate choose",
                restriction: [],
                schema: []
              },
              {
                name: "ModifyDate",
                type: "datetime",
                required: true,
                description: "Modify date in case resettle we can know when this record resettle.",
                restriction: [],
                schema: []
              },
              {
                name: "WinloseDate",
                type: "datetime",
                required: true,
                description: "Winlose time",
                restriction: [],
                schema: []
              },
              {
                name: "Status",
                type: "String",
                required: true,
                description: "CurrentStatus",
                restriction: [],
                schema: []
              },
              {
                name: "ProviderStatus",
                type: "String",
                required: false,
                description: "Reference provider status",
                restriction: [],
                schema: []
              },
              {
                name: "EndRound",
                type: "boolean",
                required: true,
                description: "Is this settle end of round",
                restriction: [],
                schema: []
              },
              {
                name: "BetType",
                type: "String",
                required: false,
                description: "Bet type",
                restriction: [],
                schema: []
              },
              {
                name: "ReferenceTrans",
                type: "String",
                required: false,
                description: "Reference tranguid",
                restriction: [],
                schema: []
              },
            ]
          }
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
                    name: "error",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "balance",
                    type: "string",
                    required: false,
                    description: "10000.23",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          },
          {
            code: 500,
            message: "InternalServer",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "string",
                    required: false,
                    description: "1 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "corresponding message",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Response samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "ApiKey":"{{api_key}}",
              "action":"settle",
              "data": [
                {
                  "UserId": 9088328,
                  "UserName": "001",
                  "OrderTime": "2024-06-10T04:24:08.000Z",
                  "TransGuid": "6da3922c-852c-08dc-6433-64742c85dc08",
                  "Stake": 10.000000,
                  "ActualStake": 10.000000,
                  "Winlost": 16.00,
                  "TurnOver": 10.000000,
                  "Profit": 6.000000,
                  "ModifyDate": "2024-06-10T04:24:08.820Z",
                  "WinloseDate": "2024-06-10T04:24:08.000Z",
                  "GameType": "Slot",
                  "GameId": "6da3922c-852c-08dc-6333-64742c85dc08",
                  "ProductType": "Fortune_House",
                  "TableName": "Fortune_House",
                  "Status": "Settled",
                  "ProviderStatus": "Win",
                  "Provider": "RT (QM)",
                  "ProviderId": 10,
                  "CancelType": 0,
                  "ExtraData": "{\"externalbetid\":\"5811890169721\",\"externalgameid\":\"FortuneHouse\",\"externalroundid\":\"5811890169721\",\"platformtype\":0,\"isclosinground\":true}",
                  "BetType": "",
                  "ReferenceTrans": "6da3922c-852c-08dc-6333-64742c85dc08",
                  "EndRound": true
                }
              ],
            }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
                "balance":45494.45,
                "error":0,
                "message":null,
                "data":[
                {
                "userId":"9088330",
                "transId":"mm-142540802",
                "balance":45494.45,
                "error":0,
                "message":null,
                "dup":false
                }
              ],
              "statementDate":null
              }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": "corresponding message",
              }
          }
        ]
      },
    ]
  },
  {
    title:"Spade Gaming",
    id: "spade_gaming",
    api:[
      {
        title: "Get Balance",
        id: "get_balance_spade_gaming",
        type: ApiEnum.POST,
        endpoint: "",
        description: "Sync player’s balance periodically",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "ApiKey",
                type: "string",
                required: true,
                description: "The key pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema: []
              },
              {
                name: "action",
                type: "string",
                required: true,
                description: "Notice: we will send the exact value `getBalance` ",
                restriction: [],
                schema: []
              },
              {
                name: "userId",
                type: "string",
                required: false,
                description: "userId in 12live system",
                restriction: [],
                schema: []
              },
              {
                name: "userName",
                type: "string",
                required: true,
                description: "Player username",
                restriction: [],
                schema: []
              }
            ]
          }
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
                    name: "error",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "10000.23",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          },
          {
            code: 500,
            message: "InternalServer",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "string",
                    required: false,
                    description: "1 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "corresponding message",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Response samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "ApiKey":"{{api_key}}",
              "action":"getBalance",
              "userId": 9088330,
              "userName":" 003",
              }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "",
              "balance": 45491.45
              }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": "corresponding message"
              }
          }
        ]
      },
      {
        title: "Place Bet",
        id: "place_bet_spade_gaming",
        type: ApiEnum.POST,
        endpoint: "",
        description: "Sending bet information to single wallet site 1. Every bet request response must include 'balance' parameter to update player balance on the page. 2. Current status of bet transaction is unsettled. 3. Any bet failure occurred will trigger 'Cancel Bet' function to cancel this transaction.",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "ApiKey",
                type: "string",
                required: true,
                description: "The key pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema: []
              },
              {
                name: "action",
                type: "string",
                required: true,
                description: "bet",
                restriction: [],
                schema: []
              },
              {
                name: "userId",
                type: "string",
                required: true,
                description: "userId in 12live system",
                restriction: [],
                schema: []
              },
              {
                name: "userName",
                type: "string",
                required: true,
                description: "Player username",
                restriction: [],
                schema: []
              },
              {
                name: "OrderTime",
                type: "datetime",
                required: true,
                description: "Bet order time",
                restriction: [],
                schema: []
              },
              {
                name: "TransGuid",
                type: "string",
                required: true,
                description: "Bet transguid. Bet request and Settle request using same TransGuid",
                restriction: [],
                schema: []
              },
              {
                name: "Stake",
                type: "decimal",
                required: true,
                description: "how much user bet",
                restriction: [],
                schema: []
              },
              {
                name: "ProviderId",
                type: "int",
                required: true,
                description: "Game provider Id on 12live",
                restriction: [],
                schema: []
              },
              {
                name: "GameId",
                type: "string",
                required: true,
                description: "Round Id of game",
                restriction: [],
                schema: []
              },
              {
                name: "ProductType",
                type: "string",
                required: true,
                description: "Game name or Game code",
                restriction: [],
                schema: []
              },
              {
                name: "GameType",
                type: "string",
                required: true,
                description: "Type of game like : Slot, Live..",
                restriction: [],
                schema: []
              },
              {
                name: "TableName",
                type: "string",
                required: true,
                description: "Table name of casino or Game code/ Game name on slot..",
                restriction: [],
                schema: []
              },
              {
                name: "PlayType",
                type: "string",
                required: false,
                description: "Bet choose. Ex: Banker or Player on casino or Gate choose",
                restriction: [],
                schema: []
              },
              {
                name: "ExtraData",
                type: "string",
                required: false,
                description: "game provider info",
                restriction: [],
                schema: []
              },
              {
                name: "BetType",
                type: "string",
                required: false,
                description: "",
                restriction: [],
                schema: []
              }
              
            ]
          }
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
                    name: "error",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "balance",
                    type: "string",
                    required: false,
                    description: "10000.23",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          },
          {
            code: 500,
            message: "InternalServer",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "string",
                    required: false,
                    description: "1 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "corresponding message",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Response samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "ApiKey":"{{api_key}}",
              "action":"bet",
              "data":[
              {
              "UserId":9088330,
              "UserName":"001",
              "OrderTime":"2024-05-02T08:44:56.840Z",
              "TransGuid":"mm-142540802",
              "Stake":3.0,
              "ProviderId":14,
              "ParentId":3857816,
              "GameId":"142540802",
              "ProductType":"League Of Legends",
              "GameType":"Slot",
              "TableName":"54",
              "PlayType":"",
              "ExtraData":"",
              "BetType":"" 
              }
            ]
          }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "balance": 12082.02,
              "error": 0,
              "message": null,
              "data": [
                {
                  "userId": "9088328",
                  "transId": "20240610124628262151804",
                  "balance": 12082.02,
                  "error": 0,
                  "message": null,
                  "dup": false
                }
              ],
              "statementDate": null,
              }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": "corresponding message",
              // "error1": 10, //balance not enough
              // "error2": 1031, //system error
              },
              
          }
        ]
      },
      {
        title: "Cancel Bet",
        id: "cancel_bet_spade_gaming",
        type: ApiEnum.POST,
        endpoint: "",
        description: "Sending bet information to single wallet site 1. When place bet has failure will call 'Cancel Bet'. 2. When cancel bet is unsuccessful will schedule a job to repeat it until success.",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "ApiKey",
                type: "string",
                required: true,
                description: "The key pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema: []
              },
              {
                name: "action",
                type: "string",
                required: true,
                description: "bet",
                restriction: [],
                schema: []
              },
              {
                name: "userId",
                type: "string",
                required: true,
                description: "userId in 12live system",
                restriction: [],
                schema: []
              },
              {
                name: "userName",
                type: "string",
                required: true,
                description: "Player username",
                restriction: [],
                schema: []
              },
              {
                name: "OrderTime",
                type: "datetime",
                required: true,
                description: "Bet order time",
                restriction: [],
                schema: []
              },
              {
                name: "TransGuid",
                type: "string",
                required: true,
                description: "Bet transguid. Bet request and Settle request using same TransGuid",
                restriction: [],
                schema: []
              },
              {
                name: "Stake",
                type: "decimal",
                required: true,
                description: "how much user bet",
                restriction: [],
                schema: []
              },
              {
                name: "ProviderId",
                type: "int",
                required: true,
                description: "Game provider Id on 12live",
                restriction: [],
                schema: []
              },
              {
                name: "GameId",
                type: "string",
                required: true,
                description: "Round Id of game",
                restriction: [],
                schema: []
              },
              {
                name: "ProductType",
                type: "string",
                required: true,
                description: "Game name or Game code",
                restriction: [],
                schema: []
              },
              {
                name: "GameType",
                type: "string",
                required: true,
                description: "Type of game like : Slot, Live..",
                restriction: [],
                schema: []
              },
              {
                name: "TableName",
                type: "string",
                required: true,
                description: "Table name of casino or Game code/ Game name on slot..",
                restriction: [],
                schema: []
              },
              {
                name: "PlayType",
                type: "string",
                required: false,
                description: "Bet choose. Ex: Banker or Player on casino or Gate choose",
                restriction: [],
                schema: []
              },
              {
                name: "ExtraData",
                type: "string",
                required: false,
                description: "game provider info",
                restriction: [],
                schema: []
              },
              {
                name: "BetType",
                type: "string",
                required: false,
                description: "",
                restriction: [],
                schema: []
              }
              
            ]
          }
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
                    name: "error",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "balance",
                    type: "string",
                    required: false,
                    description: "10000.23",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          },
          {
            code: 500,
            message: "InternalServer",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "string",
                    required: false,
                    description: "1 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "corresponding message",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Response samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "ApiKey":"{{api_key}}",
              "action":"cancelBet",
              "data":[
                {
                "UserId": 9088330, 
                "UserName": "003", 
                "OrderTime": "2024-05-02T08:44:56.840Z", 
                "TransGuid": "mm-142540802", 
                "Stake": 3.00, 
                "ProviderId": 14, 
                "GameId": "142540802", 
                "ProductType": "League Of Legends", 
                "GameType": "Slot", 
                "TableName": "54",
                "PlayType": "",
                "ExtraData": "",
                "BetType": ""
                }
              ]
            }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "",
              "balance": 45491.45,
              "data":[
                {
                "error": 0, 
                "transId": "mm-142540802", 
                "userId": 9088330, 
                "balance": 45491.45,
                }
              ]
            }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": "corresponding message",
              }
          }
        ]
      },
      {
        title: "Settle Bet",
        id: "settle_bet_spade_gaming",
        type: ApiEnum.POST,
        endpoint: "",
        description: "Sending transactions when had settled.",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "ApiKey",
                type: "string",
                required: true,
                description: "The key pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema: []
              },
              {
                name: "action",
                type: "string",
                required: true,
                description: "bet",
                restriction: [],
                schema: []
              },
              {
                name: "userId",
                type: "string",
                required: true,
                description: "userId in 12live system",
                restriction: [],
                schema: []
              },
              {
                name: "userName",
                type: "string",
                required: true,
                description: "Player username",
                restriction: [],
                schema: []
              },
              {
                name: "OrderTime",
                type: "datetime",
                required: true,
                description: "Bet order time",
                restriction: [],
                schema: []
              },
              {
                name: "TransGuid",
                type: "string",
                required: true,
                description: "Bet transguid. Bet request and Settle request using same TransGuid",
                restriction: [],
                schema: []
              },
              {
                name: "Stake",
                type: "decimal",
                required: true,
                description: "how much user bet",
                restriction: [],
                schema: []
              },
              {
                name: "Winlost",
                type: "decimal",
                required: true,
                description: "Player winlost (included Stake)",
                restriction: [],
                schema: []
              },
              {
                name: "TurnOver",
                type: "decimal",
                required: true,
                description: "",
                restriction: [],
                schema: []
              },
              {
                name: "ProviderId",
                type: "int",
                required: true,
                description: "Game provider Id on 12live",
                restriction: [],
                schema: []
              },
              {
                name: "Provider",
                type: "string",
                required: false,
                description: "Provider name",
                restriction: [],
                schema: []
              },
              {
                name: "GameId",
                type: "string",
                required: true,
                description: "Round Id of game",
                restriction: [],
                schema: []
              },
              {
                name: "ProductType",
                type: "string",
                required: true,
                description: "Game name or Game code",
                restriction: [],
                schema: []
              },
              {
                name: "GameType",
                type: "string",
                required: true,
                description: "Type of game like : Slot, Live..",
                restriction: [],
                schema: []
              },
              {
                name: "TableName",
                type: "string",
                required: true,
                description: "Table name of casino or Game code/ Game name on slot..",
                restriction: [],
                schema: []
              },
              {
                name: "PlayType",
                type: "string",
                required: true,
                description: "Bet choose. Ex: Banker or Player on casino or Gate choose",
                restriction: [],
                schema: []
              },
              {
                name: "ModifyDate",
                type: "datetime",
                required: true,
                description: "Modify date in case resettle we can know when this record resettle.",
                restriction: [],
                schema: []
              },
              {
                name: "WinloseDate",
                type: "datetime",
                required: true,
                description: "Winlose time",
                restriction: [],
                schema: []
              },
              {
                name: "Status",
                type: "String",
                required: true,
                description: "CurrentStatus",
                restriction: [],
                schema: []
              },
              {
                name: "ProviderStatus",
                type: "String",
                required: false,
                description: "Reference provider status",
                restriction: [],
                schema: []
              },
              {
                name: "EndRound",
                type: "boolean",
                required: true,
                description: "Is this settle end of round",
                restriction: [],
                schema: []
              },
              {
                name: "BetType",
                type: "String",
                required: false,
                description: "Bet type",
                restriction: [],
                schema: []
              },
              {
                name: "ReferenceTrans",
                type: "String",
                required: false,
                description: "Reference tranguid",
                restriction: [],
                schema: []
              },
            ]
          }
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
                    name: "error",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "balance",
                    type: "string",
                    required: false,
                    description: "10000.23",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          },
          {
            code: 500,
            message: "InternalServer",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "string",
                    required: false,
                    description: "1 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "corresponding message",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Response samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "ApiKey":"{{api_key}}",
              "action":"settle",
              "data": [
                {
                  "UserId": 9088328,
                  "UserName": "001",
                  "OrderTime": "2024-06-10T04:46:28.107Z",
                  "TransGuid": "20240610124628262151804",
                  "Stake": 5.00,
                  "ActualStake": 5.00,
                  "Winlost": 0.0,
                  "TurnOver": 5.00,
                  "Profit": -5.00,
                  "ModifyDate": "2024-06-10T04:46:28.388Z",
                  "WinloseDate": "2024-06-10T04:46:28.388Z",
                  "GameType": "Slot",
                  "GameId": "20240610124627981151791",
                  "ProductType": "S-KF01",
                  "TableName": "Web",
                  "Status": "Settled",
                  "ProviderStatus": "Payout",
                  "Provider": "SpadeGaming",
                  "ProviderId": 14,
                  "CancelType": 0,
                  "ExtraData": "{\"specialGame\":null,\"ticketId\":\"52912262\",\"refTicketIds\":null,\"serialNo\":\"138bb008-6529-44e5-a480-5b97cbb27073\",\"type\":4}",
                  "BetType": "",
                  "ReferenceTrans": "20240610124627981151791",
                  "EndRound": true
                }
              ],
            }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
                "balance":45494.45,
                "error":0,
                "message":null,
                "data":[
                {
                "userId":"9088330",
                "transId":"mm-142540802",
                "balance":45494.45,
                "error":0,
                "message":null,
                "dup":false
                }
              ],
              "statementDate":null
              }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": "corresponding message",
              }
          }
        ]
      },
    ]
  },
  {
    title:"WM Live",
    id: "wm_live",
    api:[
      {
        title: "Get Balance",
        id: "get_balance_wm_live",
        type: ApiEnum.POST,
        endpoint: "",
        description: "Sync player’s balance periodically",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "ApiKey",
                type: "string",
                required: true,
                description: "The key pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema: []
              },
              {
                name: "action",
                type: "string",
                required: true,
                description: "Notice: we will send the exact value `getBalance` ",
                restriction: [],
                schema: []
              },
              {
                name: "userId",
                type: "string",
                required: false,
                description: "userId in 12live system",
                restriction: [],
                schema: []
              },
              {
                name: "userName",
                type: "string",
                required: true,
                description: "Player username",
                restriction: [],
                schema: []
              }
            ]
          }
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
                    name: "error",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "10000.23",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          },
          {
            code: 500,
            message: "InternalServer",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "string",
                    required: false,
                    description: "1 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "corresponding message",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Response samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "ApiKey":"{{api_key}}",
              "action":"getBalance",
              "userId": 9088330,
              "userName":" 003",
              }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "",
              "balance": 45491.45
              }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": "corresponding message"
              }
          }
        ]
      },
      {
        title: "Place Bet",
        id: "place_bet_wm_live",
        type: ApiEnum.POST,
        endpoint: "",
        description: "Sending bet information to single wallet site 1. Every bet request response must include 'balance' parameter to update player balance on the page. 2. Current status of bet transaction is unsettled. 3. Any bet failure occurred will trigger 'Cancel Bet' function to cancel this transaction.",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "ApiKey",
                type: "string",
                required: true,
                description: "The key pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema: []
              },
              {
                name: "action",
                type: "string",
                required: true,
                description: "bet",
                restriction: [],
                schema: []
              },
              {
                name: "userId",
                type: "string",
                required: true,
                description: "userId in 12live system",
                restriction: [],
                schema: []
              },
              {
                name: "userName",
                type: "string",
                required: true,
                description: "Player username",
                restriction: [],
                schema: []
              },
              {
                name: "OrderTime",
                type: "datetime",
                required: true,
                description: "Bet order time",
                restriction: [],
                schema: []
              },
              {
                name: "TransGuid",
                type: "string",
                required: true,
                description: "Bet transguid. Bet request and Settle request using same TransGuid",
                restriction: [],
                schema: []
              },
              {
                name: "Stake",
                type: "decimal",
                required: true,
                description: "how much user bet",
                restriction: [],
                schema: []
              },
              {
                name: "ProviderId",
                type: "int",
                required: true,
                description: "Game provider Id on 12live",
                restriction: [],
                schema: []
              },
              {
                name: "GameId",
                type: "string",
                required: true,
                description: "Round Id of game",
                restriction: [],
                schema: []
              },
              {
                name: "ProductType",
                type: "string",
                required: true,
                description: "Game name or Game code",
                restriction: [],
                schema: []
              },
              {
                name: "GameType",
                type: "string",
                required: true,
                description: "Type of game like : Slot, Live..",
                restriction: [],
                schema: []
              },
              {
                name: "TableName",
                type: "string",
                required: true,
                description: "Table name of casino or Game code/ Game name on slot..",
                restriction: [],
                schema: []
              },
              {
                name: "PlayType",
                type: "string",
                required: false,
                description: "Bet choose. Ex: Banker or Player on casino or Gate choose",
                restriction: [],
                schema: []
              },
              {
                name: "ExtraData",
                type: "string",
                required: false,
                description: "game provider info",
                restriction: [],
                schema: []
              },
              {
                name: "BetType",
                type: "string",
                required: false,
                description: "",
                restriction: [],
                schema: []
              }
              
            ]
          }
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
                    name: "error",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "balance",
                    type: "string",
                    required: false,
                    description: "10000.23",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          },
          {
            code: 500,
            message: "InternalServer",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "string",
                    required: false,
                    description: "1 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "corresponding message",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Response samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "ApiKey":"{{api_key}}",
              "action":"bet",
              "data":[
              {
              "UserId":9088330,
              "UserName":"001",
              "OrderTime":"2024-05-02T08:44:56.840Z",
              "TransGuid":"mm-142540802",
              "Stake":3.0,
              "ProviderId":13,
              "ParentId":3857816,
              "GameId":"142540802",
              "ProductType":"League Of Legends",
              "GameType":"Casino",
              "TableName":"54",
              "PlayType":"",
              "ExtraData":"",
              "BetType":"" 
              }
            ]
          }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "balance": 12152.02,
              "error": 0,
              "message": null,
              "data": [
                {
                  "userId": "9088328",
                  "transId": "2147668209",
                  "balance": 12152.02,
                  "error": 0,
                  "message": null,
                  "dup": false
                }
              ],
              "statementDate": null,
              }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": "corresponding message",
              // "error1": 10, //balance not enough
              // "error2": 1031, //system error
              },
              
          }
        ]
      },
      {
        title: "Cancel Bet",
        id: "cancel_bet_wm_live",
        type: ApiEnum.POST,
        endpoint: "",
        description: "Sending bet information to single wallet site 1. When place bet has failure will call 'Cancel Bet'. 2. When cancel bet is unsuccessful will schedule a job to repeat it until success.",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "ApiKey",
                type: "string",
                required: true,
                description: "The key pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema: []
              },
              {
                name: "action",
                type: "string",
                required: true,
                description: "bet",
                restriction: [],
                schema: []
              },
              {
                name: "userId",
                type: "string",
                required: true,
                description: "userId in 12live system",
                restriction: [],
                schema: []
              },
              {
                name: "userName",
                type: "string",
                required: true,
                description: "Player username",
                restriction: [],
                schema: []
              },
              {
                name: "OrderTime",
                type: "datetime",
                required: true,
                description: "Bet order time",
                restriction: [],
                schema: []
              },
              {
                name: "TransGuid",
                type: "string",
                required: true,
                description: "Bet transguid. Bet request and Settle request using same TransGuid",
                restriction: [],
                schema: []
              },
              {
                name: "Stake",
                type: "decimal",
                required: true,
                description: "how much user bet",
                restriction: [],
                schema: []
              },
              {
                name: "ProviderId",
                type: "int",
                required: true,
                description: "Game provider Id on 12live",
                restriction: [],
                schema: []
              },
              {
                name: "GameId",
                type: "string",
                required: true,
                description: "Round Id of game",
                restriction: [],
                schema: []
              },
              {
                name: "ProductType",
                type: "string",
                required: true,
                description: "Game name or Game code",
                restriction: [],
                schema: []
              },
              {
                name: "GameType",
                type: "string",
                required: true,
                description: "Type of game like : Slot, Live..",
                restriction: [],
                schema: []
              },
              {
                name: "TableName",
                type: "string",
                required: true,
                description: "Table name of casino or Game code/ Game name on slot..",
                restriction: [],
                schema: []
              },
              {
                name: "PlayType",
                type: "string",
                required: false,
                description: "Bet choose. Ex: Banker or Player on casino or Gate choose",
                restriction: [],
                schema: []
              },
              {
                name: "ExtraData",
                type: "string",
                required: false,
                description: "game provider info",
                restriction: [],
                schema: []
              },
              {
                name: "BetType",
                type: "string",
                required: false,
                description: "",
                restriction: [],
                schema: []
              }
              
            ]
          }
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
                    name: "error",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "balance",
                    type: "string",
                    required: false,
                    description: "10000.23",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          },
          {
            code: 500,
            message: "InternalServer",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "string",
                    required: false,
                    description: "1 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "corresponding message",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Response samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "ApiKey":"{{api_key}}",
              "action":"cancelBet",
              "data":[
                {
                "UserId": 9088330, 
                "UserName": "003", 
                "OrderTime": "2024-05-02T08:44:56.840Z", 
                "TransGuid": "mm-142540802", 
                "Stake": 3.00, 
                "ProviderId": 13, 
                "GameId": "142540802", 
                "ProductType": "League Of Legends", 
                "GameType": "Casino", 
                "TableName": "54",
                "PlayType": "",
                "ExtraData": "",
                "BetType": ""
                }
              ]
            }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "",
              "balance": 45491.45,
              "data":[
                {
                "error": 0, 
                "transId": "mm-142540802", 
                "userId": 9088330, 
                "balance": 45491.45,
                }
              ]
            }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": "corresponding message",
              }
          }
        ]
      },
      {
        title: "Settle Bet",
        id: "settle_bet_wm_live",
        type: ApiEnum.POST,
        endpoint: "",
        description: "Sending transactions when had settled.",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "ApiKey",
                type: "string",
                required: true,
                description: "The key pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema: []
              },
              {
                name: "action",
                type: "string",
                required: true,
                description: "bet",
                restriction: [],
                schema: []
              },
              {
                name: "userId",
                type: "string",
                required: true,
                description: "userId in 12live system",
                restriction: [],
                schema: []
              },
              {
                name: "userName",
                type: "string",
                required: true,
                description: "Player username",
                restriction: [],
                schema: []
              },
              {
                name: "OrderTime",
                type: "datetime",
                required: true,
                description: "Bet order time",
                restriction: [],
                schema: []
              },
              {
                name: "TransGuid",
                type: "string",
                required: true,
                description: "Bet transguid. Bet request and Settle request using same TransGuid",
                restriction: [],
                schema: []
              },
              {
                name: "Stake",
                type: "decimal",
                required: true,
                description: "how much user bet",
                restriction: [],
                schema: []
              },
              {
                name: "Winlost",
                type: "decimal",
                required: true,
                description: "Player winlost (included Stake)",
                restriction: [],
                schema: []
              },
              {
                name: "TurnOver",
                type: "decimal",
                required: true,
                description: "",
                restriction: [],
                schema: []
              },
              {
                name: "ProviderId",
                type: "int",
                required: true,
                description: "Game provider Id on 12live",
                restriction: [],
                schema: []
              },
              {
                name: "Provider",
                type: "string",
                required: false,
                description: "Provider name",
                restriction: [],
                schema: []
              },
              {
                name: "GameId",
                type: "string",
                required: true,
                description: "Round Id of game",
                restriction: [],
                schema: []
              },
              {
                name: "ProductType",
                type: "string",
                required: true,
                description: "Game name or Game code",
                restriction: [],
                schema: []
              },
              {
                name: "GameType",
                type: "string",
                required: true,
                description: "Type of game like : Slot, Live..",
                restriction: [],
                schema: []
              },
              {
                name: "TableName",
                type: "string",
                required: true,
                description: "Table name of casino or Game code/ Game name on slot..",
                restriction: [],
                schema: []
              },
              {
                name: "PlayType",
                type: "string",
                required: true,
                description: "Bet choose. Ex: Banker or Player on casino or Gate choose",
                restriction: [],
                schema: []
              },
              {
                name: "ModifyDate",
                type: "datetime",
                required: true,
                description: "Modify date in case resettle we can know when this record resettle.",
                restriction: [],
                schema: []
              },
              {
                name: "WinloseDate",
                type: "datetime",
                required: true,
                description: "Winlose time",
                restriction: [],
                schema: []
              },
              {
                name: "Status",
                type: "String",
                required: true,
                description: "CurrentStatus",
                restriction: [],
                schema: []
              },
              {
                name: "ProviderStatus",
                type: "String",
                required: false,
                description: "Reference provider status",
                restriction: [],
                schema: []
              },
              {
                name: "EndRound",
                type: "boolean",
                required: true,
                description: "Is this settle end of round",
                restriction: [],
                schema: []
              },
              {
                name: "BetType",
                type: "String",
                required: false,
                description: "Bet type",
                restriction: [],
                schema: []
              },
              {
                name: "ReferenceTrans",
                type: "String",
                required: false,
                description: "Reference tranguid",
                restriction: [],
                schema: []
              },
            ]
          }
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
                    name: "error",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "balance",
                    type: "string",
                    required: false,
                    description: "10000.23",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          },
          {
            code: 500,
            message: "InternalServer",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "string",
                    required: false,
                    description: "1 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "corresponding message",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Response samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "ApiKey":"{{api_key}}",
              "action":"settle",
              "data": [
                {
                  "UserId": 9088328,
                  "UserName": "001",
                  "OrderTime": "2024-06-10T07:09:33.843Z",
                  "TransGuid": "2147668209",
                  "Stake": 50.00,
                  "ActualStake": 50.00,
                  "Winlost": 100.0000,
                  "TurnOver": 50.00,
                  "Profit": 50.0000,
                  "ModifyDate": "2024-06-10T07:10:10.188Z",
                  "WinloseDate": "2024-06-10T07:10:10.173Z",
                  "GameType": "Casino",
                  "GameId": "101_113835353_26",
                  "ProductType": "Baccarat",
                  "TableName": "Baccarat",
                  "Status": "Settled",
                  "ProviderStatus": "Win",
                  "Provider": "WM Live",
                  "ProviderId": 13,
                  "CancelType": 0,
                  "ExtraData": "",
                  "BetType": "",
                  "ReferenceTrans": "",
                  "EndRound": true
                }
              ],
            }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
                "balance":45494.45,
                "error":0,
                "message":null,
                "data":[
                {
                "userId":"9088330",
                "transId":"mm-142540802",
                "balance":45494.45,
                "error":0,
                "message":null,
                "dup":false
                }
              ],
              "statementDate":null
              }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": "corresponding message",
              }
          }
        ]
      },
    ]
  },
  {
    title:"AWC",
    id: "awc",
    api:[
      {
        title: "Get Balance",
        id: "get_balance_awc",
        type: ApiEnum.POST,
        endpoint: "",
        description: "Sync player’s balance periodically",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "ApiKey",
                type: "string",
                required: true,
                description: "The key pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema: []
              },
              {
                name: "action",
                type: "string",
                required: true,
                description: "Notice: we will send the exact value `getBalance` ",
                restriction: [],
                schema: []
              },
              {
                name: "userId",
                type: "string",
                required: false,
                description: "userId in 12live system",
                restriction: [],
                schema: []
              },
              {
                name: "userName",
                type: "string",
                required: true,
                description: "Player username",
                restriction: [],
                schema: []
              }
            ]
          }
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
                    name: "error",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "10000.23",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          },
          {
            code: 500,
            message: "InternalServer",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "string",
                    required: false,
                    description: "1 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "corresponding message",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Response samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "ApiKey":"{{api_key}}",
              "action":"getBalance",
              "userId": 9088330,
              "userName":" 003",
              }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "",
              "balance": 45491.45
              }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": "corresponding message"
              }
          }
        ]
      },
      {
        title: "Place Bet",
        id: "place_bet_awc",
        type: ApiEnum.POST,
        endpoint: "",
        description: "Sending bet information to single wallet site 1. Every bet request response must include 'balance' parameter to update player balance on the page. 2. Current status of bet transaction is unsettled. 3. Any bet failure occurred will trigger 'Cancel Bet' function to cancel this transaction.",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "ApiKey",
                type: "string",
                required: true,
                description: "The key pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema: []
              },
              {
                name: "action",
                type: "string",
                required: true,
                description: "bet",
                restriction: [],
                schema: []
              },
              {
                name: "userId",
                type: "string",
                required: true,
                description: "userId in 12live system",
                restriction: [],
                schema: []
              },
              {
                name: "userName",
                type: "string",
                required: true,
                description: "Player username",
                restriction: [],
                schema: []
              },
              {
                name: "OrderTime",
                type: "datetime",
                required: true,
                description: "Bet order time",
                restriction: [],
                schema: []
              },
              {
                name: "TransGuid",
                type: "string",
                required: true,
                description: "Bet transguid. Bet request and Settle request using same TransGuid",
                restriction: [],
                schema: []
              },
              {
                name: "Stake",
                type: "decimal",
                required: true,
                description: "how much user bet",
                restriction: [],
                schema: []
              },
              {
                name: "ProviderId",
                type: "int",
                required: true,
                description: "Game provider Id on 12live",
                restriction: [],
                schema: []
              },
              {
                name: "GameId",
                type: "string",
                required: true,
                description: "Round Id of game",
                restriction: [],
                schema: []
              },
              {
                name: "ProductType",
                type: "string",
                required: true,
                description: "Game name or Game code",
                restriction: [],
                schema: []
              },
              {
                name: "GameType",
                type: "string",
                required: true,
                description: "Type of game like : Slot, Live..",
                restriction: [],
                schema: []
              },
              {
                name: "TableName",
                type: "string",
                required: true,
                description: "Table name of casino or Game code/ Game name on slot..",
                restriction: [],
                schema: []
              },
              {
                name: "PlayType",
                type: "string",
                required: false,
                description: "Bet choose. Ex: Banker or Player on casino or Gate choose",
                restriction: [],
                schema: []
              },
              {
                name: "ExtraData",
                type: "string",
                required: false,
                description: "game provider info",
                restriction: [],
                schema: []
              },
              {
                name: "BetType",
                type: "string",
                required: false,
                description: "",
                restriction: [],
                schema: []
              }
              
            ]
          }
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
                    name: "error",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "balance",
                    type: "string",
                    required: false,
                    description: "10000.23",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          },
          {
            code: 500,
            message: "InternalServer",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "string",
                    required: false,
                    description: "1 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "corresponding message",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Response samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "ApiKey":"{{api_key}}",
              "action":"bet",
              "data":[
              {
              "UserId":9088330,
              "UserName":"001",
              "OrderTime":"2024-05-02T08:44:56.840Z",
              "TransGuid":"mm-142540802",
              "Stake":3.0,
              "ProviderId":6,
              "ParentId":3857816,
              "GameId":"142540802",
              "ProductType":"League Of Legends",
              "GameType":"Slot",
              "TableName":"54",
              "PlayType":"",
              "ExtraData":"",
              "BetType":"" 
              }
            ]
          }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "balance": 12102.02,
              "error": 0,
              "message": null,
              "data": [
                {
                  "userId": "9088328",
                  "transId": "SEXYBCRT_BAC-316321616",
                  "balance": 12102.02,
                  "error": 0,
                  "message": null,
                  "dup": false
                }
              ],
              "statementDate": null,
              }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": "corresponding message",
              // "error1": 10, //balance not enough
              // "error2": 1031, //system error
              },
              
          }
        ]
      },
      {
        title: "Cancel Bet",
        id: "cancel_bet_awc",
        type: ApiEnum.POST,
        endpoint: "",
        description: "Sending bet information to single wallet site 1. When place bet has failure will call 'Cancel Bet'. 2. When cancel bet is unsuccessful will schedule a job to repeat it until success.",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "ApiKey",
                type: "string",
                required: true,
                description: "The key pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema: []
              },
              {
                name: "action",
                type: "string",
                required: true,
                description: "bet",
                restriction: [],
                schema: []
              },
              {
                name: "userId",
                type: "string",
                required: true,
                description: "userId in 12live system",
                restriction: [],
                schema: []
              },
              {
                name: "userName",
                type: "string",
                required: true,
                description: "Player username",
                restriction: [],
                schema: []
              },
              {
                name: "OrderTime",
                type: "datetime",
                required: true,
                description: "Bet order time",
                restriction: [],
                schema: []
              },
              {
                name: "TransGuid",
                type: "string",
                required: true,
                description: "Bet transguid. Bet request and Settle request using same TransGuid",
                restriction: [],
                schema: []
              },
              {
                name: "Stake",
                type: "decimal",
                required: true,
                description: "how much user bet",
                restriction: [],
                schema: []
              },
              {
                name: "ProviderId",
                type: "int",
                required: true,
                description: "Game provider Id on 12live",
                restriction: [],
                schema: []
              },
              {
                name: "GameId",
                type: "string",
                required: true,
                description: "Round Id of game",
                restriction: [],
                schema: []
              },
              {
                name: "ProductType",
                type: "string",
                required: true,
                description: "Game name or Game code",
                restriction: [],
                schema: []
              },
              {
                name: "GameType",
                type: "string",
                required: true,
                description: "Type of game like : Slot, Live..",
                restriction: [],
                schema: []
              },
              {
                name: "TableName",
                type: "string",
                required: true,
                description: "Table name of casino or Game code/ Game name on slot..",
                restriction: [],
                schema: []
              },
              {
                name: "PlayType",
                type: "string",
                required: false,
                description: "Bet choose. Ex: Banker or Player on casino or Gate choose",
                restriction: [],
                schema: []
              },
              {
                name: "ExtraData",
                type: "string",
                required: false,
                description: "game provider info",
                restriction: [],
                schema: []
              },
              {
                name: "BetType",
                type: "string",
                required: false,
                description: "",
                restriction: [],
                schema: []
              }
              
            ]
          }
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
                    name: "error",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "balance",
                    type: "string",
                    required: false,
                    description: "10000.23",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          },
          {
            code: 500,
            message: "InternalServer",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "string",
                    required: false,
                    description: "1 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "corresponding message",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Response samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "ApiKey":"{{api_key}}",
              "action":"cancelBet",
              "data":[
                {
                "UserId": 9088330, 
                "UserName": "003", 
                "OrderTime": "2024-05-02T08:44:56.840Z", 
                "TransGuid": "mm-142540802", 
                "Stake": 3.00, 
                "ProviderId": 6, 
                "GameId": "142540802", 
                "ProductType": "League Of Legends", 
                "GameType": "Slot", 
                "TableName": "54",
                "PlayType": "",
                "ExtraData": "",
                "BetType": ""
                }
              ]
            }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "",
              "balance": 45491.45,
              "data":[
                {
                "error": 0, 
                "transId": "mm-142540802", 
                "userId": 9088330, 
                "balance": 45491.45,
                }
              ]
            }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": "corresponding message",
              }
          }
        ]
      },
      {
        title: "Settle Bet",
        id: "settle_bet_awc",
        type: ApiEnum.POST,
        endpoint: "",
        description: "Sending transactions when had settled.",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "ApiKey",
                type: "string",
                required: true,
                description: "The key pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema: []
              },
              {
                name: "action",
                type: "string",
                required: true,
                description: "bet",
                restriction: [],
                schema: []
              },
              {
                name: "userId",
                type: "string",
                required: true,
                description: "userId in 12live system",
                restriction: [],
                schema: []
              },
              {
                name: "userName",
                type: "string",
                required: true,
                description: "Player username",
                restriction: [],
                schema: []
              },
              {
                name: "OrderTime",
                type: "datetime",
                required: true,
                description: "Bet order time",
                restriction: [],
                schema: []
              },
              {
                name: "TransGuid",
                type: "string",
                required: true,
                description: "Bet transguid. Bet request and Settle request using same TransGuid",
                restriction: [],
                schema: []
              },
              {
                name: "Stake",
                type: "decimal",
                required: true,
                description: "how much user bet",
                restriction: [],
                schema: []
              },
              {
                name: "Winlost",
                type: "decimal",
                required: true,
                description: "Player winlost (included Stake)",
                restriction: [],
                schema: []
              },
              {
                name: "TurnOver",
                type: "decimal",
                required: true,
                description: "",
                restriction: [],
                schema: []
              },
              {
                name: "ProviderId",
                type: "int",
                required: true,
                description: "Game provider Id on 12live",
                restriction: [],
                schema: []
              },
              {
                name: "Provider",
                type: "string",
                required: false,
                description: "Provider name",
                restriction: [],
                schema: []
              },
              {
                name: "GameId",
                type: "string",
                required: true,
                description: "Round Id of game",
                restriction: [],
                schema: []
              },
              {
                name: "ProductType",
                type: "string",
                required: true,
                description: "Game name or Game code",
                restriction: [],
                schema: []
              },
              {
                name: "GameType",
                type: "string",
                required: true,
                description: "Type of game like : Slot, Live..",
                restriction: [],
                schema: []
              },
              {
                name: "TableName",
                type: "string",
                required: true,
                description: "Table name of casino or Game code/ Game name on slot..",
                restriction: [],
                schema: []
              },
              {
                name: "PlayType",
                type: "string",
                required: true,
                description: "Bet choose. Ex: Banker or Player on casino or Gate choose",
                restriction: [],
                schema: []
              },
              {
                name: "ModifyDate",
                type: "datetime",
                required: true,
                description: "Modify date in case resettle we can know when this record resettle.",
                restriction: [],
                schema: []
              },
              {
                name: "WinloseDate",
                type: "datetime",
                required: true,
                description: "Winlose time",
                restriction: [],
                schema: []
              },
              {
                name: "Status",
                type: "String",
                required: true,
                description: "CurrentStatus",
                restriction: [],
                schema: []
              },
              {
                name: "ProviderStatus",
                type: "String",
                required: false,
                description: "Reference provider status",
                restriction: [],
                schema: []
              },
              {
                name: "EndRound",
                type: "boolean",
                required: true,
                description: "Is this settle end of round",
                restriction: [],
                schema: []
              },
              {
                name: "BetType",
                type: "String",
                required: false,
                description: "Bet type",
                restriction: [],
                schema: []
              },
              {
                name: "ReferenceTrans",
                type: "String",
                required: false,
                description: "Reference tranguid",
                restriction: [],
                schema: []
              },
            ]
          }
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
                    name: "error",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "balance",
                    type: "string",
                    required: false,
                    description: "10000.23",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          },
          {
            code: 500,
            message: "InternalServer",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "string",
                    required: false,
                    description: "1 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "corresponding message",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Response samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "ApiKey":"{{api_key}}",
              "action":"settle",
              "data": [
                {
                  "UserId": 9088328,
                  "UserName": "001",
                  "OrderTime": "2024-06-10T07:06:55.167Z",
                  "TransGuid": "SEXYBCRT_BAC-316321616",
                  "Stake": 20.00,
                  "ActualStake": 20.0,
                  "Winlost": 40.0,
                  "TurnOver": 20.0,
                  "Profit": 20.0,
                  "ModifyDate": "2024-06-10T07:07:28.382Z",
                  "WinloseDate": "2024-06-10T07:07:28.382Z",
                  "GameType": "LIVE",
                  "GameId": "Mexico-C01-GA34410005",
                  "ProductType": "MX-LIVE-001",
                  "TableName": "Baccarat Classic",
                  "Status": "Settled",
                  "ProviderStatus": "Settled",
                  "Provider": "Awc",
                  "ProviderId": 6,
                  "CancelType": 0,
                  "ExtraData": "{\"result\":[\"S10\",\"C09\",\"\",\"D11\",\"D02\",\"\"],\"roundStartTime\":\"06/10/2024 15:06:48.642\",\"winner\":\"PLAYER\",\"ip\":\"103.163.220.85\",\"odds\":1.0,\"streamerId\":\"\",\"tableId\":\"C01\",\"dealerDomain\":\"Mexico\",\"winLoss\":20.0,\"status\":\"WIN\"}",
                  "BetType": "Player",
                  "ReferenceTrans": "",
                  "EndRound": true
                }
              ],
            }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
                "balance":45494.45,
                "error":0,
                "message":null,
                "data":[
                {
                "userId":"9088330",
                "transId":"mm-142540802",
                "balance":45494.45,
                "error":0,
                "message":null,
                "dup":false
                }
              ],
              "statementDate":null
              }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": "corresponding message",
              }
          }
        ]
      },
    ]
  },
  {
    title:"AdvantPlay",
    id: "advantplay",
    api:[
      {
        title: "Get Balance",
        id: "get_balance_advantplay",
        type: ApiEnum.POST,
        endpoint: "",
        description: "Sync player’s balance periodically",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "ApiKey",
                type: "string",
                required: true,
                description: "The key pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema: []
              },
              {
                name: "action",
                type: "string",
                required: true,
                description: "Notice: we will send the exact value `getBalance` ",
                restriction: [],
                schema: []
              },
              {
                name: "userId",
                type: "string",
                required: false,
                description: "userId in 12live system",
                restriction: [],
                schema: []
              },
              {
                name: "userName",
                type: "string",
                required: true,
                description: "Player username",
                restriction: [],
                schema: []
              }
            ]
          }
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
                    name: "error",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "10000.23",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          },
          {
            code: 500,
            message: "InternalServer",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "string",
                    required: false,
                    description: "1 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "corresponding message",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Response samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "ApiKey":"{{api_key}}",
              "action":"getBalance",
              "userId": 9088330,
              "userName":" 003",
              }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "",
              "balance": 45491.45
              }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": "corresponding message"
              }
          }
        ]
      },
      {
        title: "Place Bet",
        id: "place_bet_advantplay",
        type: ApiEnum.POST,
        endpoint: "",
        description: "Sending bet information to single wallet site 1. Every bet request response must include 'balance' parameter to update player balance on the page. 2. Current status of bet transaction is unsettled. 3. Any bet failure occurred will trigger 'Cancel Bet' function to cancel this transaction.",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "ApiKey",
                type: "string",
                required: true,
                description: "The key pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema: []
              },
              {
                name: "action",
                type: "string",
                required: true,
                description: "bet",
                restriction: [],
                schema: []
              },
              {
                name: "userId",
                type: "string",
                required: true,
                description: "userId in 12live system",
                restriction: [],
                schema: []
              },
              {
                name: "userName",
                type: "string",
                required: true,
                description: "Player username",
                restriction: [],
                schema: []
              },
              {
                name: "OrderTime",
                type: "datetime",
                required: true,
                description: "Bet order time",
                restriction: [],
                schema: []
              },
              {
                name: "TransGuid",
                type: "string",
                required: true,
                description: "Bet transguid. Bet request and Settle request using same TransGuid",
                restriction: [],
                schema: []
              },
              {
                name: "Stake",
                type: "decimal",
                required: true,
                description: "how much user bet",
                restriction: [],
                schema: []
              },
              {
                name: "ProviderId",
                type: "int",
                required: true,
                description: "Game provider Id on 12live",
                restriction: [],
                schema: []
              },
              {
                name: "GameId",
                type: "string",
                required: true,
                description: "Round Id of game",
                restriction: [],
                schema: []
              },
              {
                name: "ProductType",
                type: "string",
                required: true,
                description: "Game name or Game code",
                restriction: [],
                schema: []
              },
              {
                name: "GameType",
                type: "string",
                required: true,
                description: "Type of game like : Slot, Live..",
                restriction: [],
                schema: []
              },
              {
                name: "TableName",
                type: "string",
                required: true,
                description: "Table name of casino or Game code/ Game name on slot..",
                restriction: [],
                schema: []
              },
              {
                name: "PlayType",
                type: "string",
                required: false,
                description: "Bet choose. Ex: Banker or Player on casino or Gate choose",
                restriction: [],
                schema: []
              },
              {
                name: "ExtraData",
                type: "string",
                required: false,
                description: "game provider info",
                restriction: [],
                schema: []
              },
              {
                name: "BetType",
                type: "string",
                required: false,
                description: "",
                restriction: [],
                schema: []
              }
              
            ]
          }
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
                    name: "error",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "balance",
                    type: "string",
                    required: false,
                    description: "10000.23",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          },
          {
            code: 500,
            message: "InternalServer",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "string",
                    required: false,
                    description: "1 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "corresponding message",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Response samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "ApiKey":"{{api_key}}",
              "action":"bet",
              "data":[
              {
              "UserId":9088330,
              "UserName":"001",
              "OrderTime":"2024-05-02T08:44:56.840Z",
              "TransGuid":"mm-142540802",
              "Stake":3.0,
              "ProviderId":20,
              "ParentId":3857816,
              "GameId":"142540802",
              "ProductType":"League Of Legends",
              "GameType":"Slot",
              "TableName":"54",
              "PlayType":"",
              "ExtraData":"",
              "BetType":"" 
              }
            ]
          }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "balance": 12151.14,
              "error": 0,
              "message": null,
              "data": [
                {
                  "userId": "9088328",
                  "transId": "am6ErG7kJZlPKc",
                  "balance": 12151.14,
                  "error": 0,
                  "message": null,
                  "dup": false
                }
              ],
              "statementDate": null,
              }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": "corresponding message",
              // "error1": 10, //balance not enough
              // "error2": 1031, //system error
              },
              
          }
        ]
      },
      {
        title: "Cancel Bet",
        id: "cancel_bet_advantplay",
        type: ApiEnum.POST,
        endpoint: "",
        description: "Sending bet information to single wallet site 1. When place bet has failure will call 'Cancel Bet'. 2. When cancel bet is unsuccessful will schedule a job to repeat it until success.",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "ApiKey",
                type: "string",
                required: true,
                description: "The key pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema: []
              },
              {
                name: "action",
                type: "string",
                required: true,
                description: "bet",
                restriction: [],
                schema: []
              },
              {
                name: "userId",
                type: "string",
                required: true,
                description: "userId in 12live system",
                restriction: [],
                schema: []
              },
              {
                name: "userName",
                type: "string",
                required: true,
                description: "Player username",
                restriction: [],
                schema: []
              },
              {
                name: "OrderTime",
                type: "datetime",
                required: true,
                description: "Bet order time",
                restriction: [],
                schema: []
              },
              {
                name: "TransGuid",
                type: "string",
                required: true,
                description: "Bet transguid. Bet request and Settle request using same TransGuid",
                restriction: [],
                schema: []
              },
              {
                name: "Stake",
                type: "decimal",
                required: true,
                description: "how much user bet",
                restriction: [],
                schema: []
              },
              {
                name: "ProviderId",
                type: "int",
                required: true,
                description: "Game provider Id on 12live",
                restriction: [],
                schema: []
              },
              {
                name: "GameId",
                type: "string",
                required: true,
                description: "Round Id of game",
                restriction: [],
                schema: []
              },
              {
                name: "ProductType",
                type: "string",
                required: true,
                description: "Game name or Game code",
                restriction: [],
                schema: []
              },
              {
                name: "GameType",
                type: "string",
                required: true,
                description: "Type of game like : Slot, Live..",
                restriction: [],
                schema: []
              },
              {
                name: "TableName",
                type: "string",
                required: true,
                description: "Table name of casino or Game code/ Game name on slot..",
                restriction: [],
                schema: []
              },
              {
                name: "PlayType",
                type: "string",
                required: false,
                description: "Bet choose. Ex: Banker or Player on casino or Gate choose",
                restriction: [],
                schema: []
              },
              {
                name: "ExtraData",
                type: "string",
                required: false,
                description: "game provider info",
                restriction: [],
                schema: []
              },
              {
                name: "BetType",
                type: "string",
                required: false,
                description: "",
                restriction: [],
                schema: []
              }
              
            ]
          }
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
                    name: "error",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "balance",
                    type: "string",
                    required: false,
                    description: "10000.23",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          },
          {
            code: 500,
            message: "InternalServer",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "string",
                    required: false,
                    description: "1 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "corresponding message",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Response samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "ApiKey":"{{api_key}}",
              "action":"cancelBet",
              "data":[
                {
                "UserId": 9088330, 
                "UserName": "003", 
                "OrderTime": "2024-05-02T08:44:56.840Z", 
                "TransGuid": "mm-142540802", 
                "Stake": 3.00, 
                "ProviderId": 20, 
                "GameId": "142540802", 
                "ProductType": "League Of Legends", 
                "GameType": "Slot", 
                "TableName": "54",
                "PlayType": "",
                "ExtraData": "",
                "BetType": ""
                }
              ]
            }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "",
              "balance": 45491.45,
              "data":[
                {
                "error": 0, 
                "transId": "mm-142540802", 
                "userId": 9088330, 
                "balance": 45491.45,
                }
              ]
            }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": "corresponding message",
              }
          }
        ]
      },
      {
        title: "Settle Bet",
        id: "settle_bet_advantplay",
        type: ApiEnum.POST,
        endpoint: "",
        description: "Sending transactions when had settled.",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "ApiKey",
                type: "string",
                required: true,
                description: "The key pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema: []
              },
              {
                name: "action",
                type: "string",
                required: true,
                description: "bet",
                restriction: [],
                schema: []
              },
              {
                name: "userId",
                type: "string",
                required: true,
                description: "userId in 12live system",
                restriction: [],
                schema: []
              },
              {
                name: "userName",
                type: "string",
                required: true,
                description: "Player username",
                restriction: [],
                schema: []
              },
              {
                name: "OrderTime",
                type: "datetime",
                required: true,
                description: "Bet order time",
                restriction: [],
                schema: []
              },
              {
                name: "TransGuid",
                type: "string",
                required: true,
                description: "Bet transguid. Bet request and Settle request using same TransGuid",
                restriction: [],
                schema: []
              },
              {
                name: "Stake",
                type: "decimal",
                required: true,
                description: "how much user bet",
                restriction: [],
                schema: []
              },
              {
                name: "Winlost",
                type: "decimal",
                required: true,
                description: "Player winlost (included Stake)",
                restriction: [],
                schema: []
              },
              {
                name: "TurnOver",
                type: "decimal",
                required: true,
                description: "",
                restriction: [],
                schema: []
              },
              {
                name: "ProviderId",
                type: "int",
                required: true,
                description: "Game provider Id on 12live",
                restriction: [],
                schema: []
              },
              {
                name: "Provider",
                type: "string",
                required: false,
                description: "Provider name",
                restriction: [],
                schema: []
              },
              {
                name: "GameId",
                type: "string",
                required: true,
                description: "Round Id of game",
                restriction: [],
                schema: []
              },
              {
                name: "ProductType",
                type: "string",
                required: true,
                description: "Game name or Game code",
                restriction: [],
                schema: []
              },
              {
                name: "GameType",
                type: "string",
                required: true,
                description: "Type of game like : Slot, Live..",
                restriction: [],
                schema: []
              },
              {
                name: "TableName",
                type: "string",
                required: true,
                description: "Table name of casino or Game code/ Game name on slot..",
                restriction: [],
                schema: []
              },
              {
                name: "PlayType",
                type: "string",
                required: true,
                description: "Bet choose. Ex: Banker or Player on casino or Gate choose",
                restriction: [],
                schema: []
              },
              {
                name: "ModifyDate",
                type: "datetime",
                required: true,
                description: "Modify date in case resettle we can know when this record resettle.",
                restriction: [],
                schema: []
              },
              {
                name: "WinloseDate",
                type: "datetime",
                required: true,
                description: "Winlose time",
                restriction: [],
                schema: []
              },
              {
                name: "Status",
                type: "String",
                required: true,
                description: "CurrentStatus",
                restriction: [],
                schema: []
              },
              {
                name: "ProviderStatus",
                type: "String",
                required: false,
                description: "Reference provider status",
                restriction: [],
                schema: []
              },
              {
                name: "EndRound",
                type: "boolean",
                required: true,
                description: "Is this settle end of round",
                restriction: [],
                schema: []
              },
              {
                name: "BetType",
                type: "String",
                required: false,
                description: "Bet type",
                restriction: [],
                schema: []
              },
              {
                name: "ReferenceTrans",
                type: "String",
                required: false,
                description: "Reference tranguid",
                restriction: [],
                schema: []
              },
            ]
          }
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
                    name: "error",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "balance",
                    type: "string",
                    required: false,
                    description: "10000.23",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          },
          {
            code: 500,
            message: "InternalServer",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "string",
                    required: false,
                    description: "1 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "corresponding message",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Response samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "ApiKey":"{{api_key}}",
              "action":"settle",
              "data": [
                {
                  "UserId": 9088328,
                  "UserName": "001",
                  "OrderTime": "2024-06-10T07:49:35.170Z",
                  "TransGuid": "am6ErG7kJZlPKc",
                  "Stake": 0.50,
                  "ActualStake": 0.50,
                  "Winlost": 0.0,
                  "TurnOver": 0.50,
                  "Profit": -0.50,
                  "ModifyDate": "2024-06-10T07:49:35.468Z",
                  "WinloseDate": "2024-06-10T07:49:35.468Z",
                  "GameType": "Slot",
                  "GameId": "am6ErG7kJZlPKc",
                  "ProductType": "19002",
                  "TableName": "19002",
                  "Status": "Settled",
                  "ProviderStatus": "Settled",
                  "Provider": "AdvantPlay",
                  "ProviderId": 20,
                  "CancelType": 0,
                  "ExtraData": "",
                  "BetType": "",
                  "ReferenceTrans": "",
                  "EndRound": true
                }
              ],
            }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
                "balance":45494.45,
                "error":0,
                "message":null,
                "data":[
                {
                "userId":"9088330",
                "transId":"mm-142540802",
                "balance":45494.45,
                "error":0,
                "message":null,
                "dup":false
                }
              ],
              "statementDate":null
              }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": "corresponding message",
              }
          }
        ]
      },
    ]
  },
  {
    title:"Funky",
    id: "funky",
    api:[
      {
        title: "Get Balance",
        id: "get_balance_funky",
        type: ApiEnum.POST,
        endpoint: "",
        description: "Sync player’s balance periodically",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "ApiKey",
                type: "string",
                required: true,
                description: "The key pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema: []
              },
              {
                name: "action",
                type: "string",
                required: true,
                description: "Notice: we will send the exact value `getBalance` ",
                restriction: [],
                schema: []
              },
              {
                name: "userId",
                type: "string",
                required: false,
                description: "userId in 12live system",
                restriction: [],
                schema: []
              },
              {
                name: "userName",
                type: "string",
                required: true,
                description: "Player username",
                restriction: [],
                schema: []
              }
            ]
          }
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
                    name: "error",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "data",
                    type: "string",
                    required: false,
                    description: "10000.23",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          },
          {
            code: 500,
            message: "InternalServer",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "string",
                    required: false,
                    description: "1 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "corresponding message",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Response samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "ApiKey":"{{api_key}}",
              "action":"getBalance",
              "userId": 9088330,
              "userName":" 003",
              }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "",
              "balance": 45491.45
              }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": "corresponding message"
              }
          }
        ]
      },
      {
        title: "Place Bet",
        id: "place_bet_funky",
        type: ApiEnum.POST,
        endpoint: "",
        description: "Sending bet information to single wallet site 1. Every bet request response must include 'balance' parameter to update player balance on the page. 2. Current status of bet transaction is unsettled. 3. Any bet failure occurred will trigger 'Cancel Bet' function to cancel this transaction.",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "ApiKey",
                type: "string",
                required: true,
                description: "The key pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema: []
              },
              {
                name: "action",
                type: "string",
                required: true,
                description: "bet",
                restriction: [],
                schema: []
              },
              {
                name: "userId",
                type: "string",
                required: true,
                description: "userId in 12live system",
                restriction: [],
                schema: []
              },
              {
                name: "userName",
                type: "string",
                required: true,
                description: "Player username",
                restriction: [],
                schema: []
              },
              {
                name: "OrderTime",
                type: "datetime",
                required: true,
                description: "Bet order time",
                restriction: [],
                schema: []
              },
              {
                name: "TransGuid",
                type: "string",
                required: true,
                description: "Bet transguid. Bet request and Settle request using same TransGuid",
                restriction: [],
                schema: []
              },
              {
                name: "Stake",
                type: "decimal",
                required: true,
                description: "how much user bet",
                restriction: [],
                schema: []
              },
              {
                name: "ProviderId",
                type: "int",
                required: true,
                description: "Game provider Id on 12live",
                restriction: [],
                schema: []
              },
              {
                name: "GameId",
                type: "string",
                required: true,
                description: "Round Id of game",
                restriction: [],
                schema: []
              },
              {
                name: "ProductType",
                type: "string",
                required: true,
                description: "Game name or Game code",
                restriction: [],
                schema: []
              },
              {
                name: "GameType",
                type: "string",
                required: true,
                description: "Type of game like : Slot, Live..",
                restriction: [],
                schema: []
              },
              {
                name: "TableName",
                type: "string",
                required: true,
                description: "Table name of casino or Game code/ Game name on slot..",
                restriction: [],
                schema: []
              },
              {
                name: "PlayType",
                type: "string",
                required: false,
                description: "Bet choose. Ex: Banker or Player on casino or Gate choose",
                restriction: [],
                schema: []
              },
              {
                name: "ExtraData",
                type: "string",
                required: false,
                description: "game provider info",
                restriction: [],
                schema: []
              },
              {
                name: "BetType",
                type: "string",
                required: false,
                description: "",
                restriction: [],
                schema: []
              }
              
            ]
          }
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
                    name: "error",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "balance",
                    type: "string",
                    required: false,
                    description: "10000.23",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          },
          {
            code: 500,
            message: "InternalServer",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "string",
                    required: false,
                    description: "1 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "corresponding message",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Response samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "ApiKey":"{{api_key}}",
              "action":"bet",
              "data":[
              {
              "UserId":9088330,
              "UserName":"001",
              "OrderTime":"2024-05-02T08:44:56.840Z",
              "TransGuid":"mm-142540802",
              "Stake":3.0,
              "ProviderId":21,
              "ParentId":3857816,
              "GameId":"142540802",
              "ProductType":"League Of Legends",
              "GameType":"Slot",
              "TableName":"54",
              "PlayType":"",
              "ExtraData":"",
              "BetType":"" 
              }
            ]
          }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "balance": 12138.34,
              "error": 0,
              "message": null,
              "data": [
                {
                  "userId": "9088328",
                  "transId": "Funky_tt_4xJiJiJix6370x101657",
                  "balance": 12138.34,
                  "error": 0,
                  "message": null,
                  "dup": false
                }
              ],
              "statementDate": null,
              }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": "corresponding message",
              // "error1": 10, //balance not enough
              // "error2": 1031, //system error
              },
              
          }
        ]
      },
      {
        title: "Cancel Bet",
        id: "cancel_bet_funky",
        type: ApiEnum.POST,
        endpoint: "",
        description: "Sending bet information to single wallet site 1. When place bet has failure will call 'Cancel Bet'. 2. When cancel bet is unsuccessful will schedule a job to repeat it until success.",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "ApiKey",
                type: "string",
                required: true,
                description: "The key pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema: []
              },
              {
                name: "action",
                type: "string",
                required: true,
                description: "bet",
                restriction: [],
                schema: []
              },
              {
                name: "userId",
                type: "string",
                required: true,
                description: "userId in 12live system",
                restriction: [],
                schema: []
              },
              {
                name: "userName",
                type: "string",
                required: true,
                description: "Player username",
                restriction: [],
                schema: []
              },
              {
                name: "OrderTime",
                type: "datetime",
                required: true,
                description: "Bet order time",
                restriction: [],
                schema: []
              },
              {
                name: "TransGuid",
                type: "string",
                required: true,
                description: "Bet transguid. Bet request and Settle request using same TransGuid",
                restriction: [],
                schema: []
              },
              {
                name: "Stake",
                type: "decimal",
                required: true,
                description: "how much user bet",
                restriction: [],
                schema: []
              },
              {
                name: "ProviderId",
                type: "int",
                required: true,
                description: "Game provider Id on 12live",
                restriction: [],
                schema: []
              },
              {
                name: "GameId",
                type: "string",
                required: true,
                description: "Round Id of game",
                restriction: [],
                schema: []
              },
              {
                name: "ProductType",
                type: "string",
                required: true,
                description: "Game name or Game code",
                restriction: [],
                schema: []
              },
              {
                name: "GameType",
                type: "string",
                required: true,
                description: "Type of game like : Slot, Live..",
                restriction: [],
                schema: []
              },
              {
                name: "TableName",
                type: "string",
                required: true,
                description: "Table name of casino or Game code/ Game name on slot..",
                restriction: [],
                schema: []
              },
              {
                name: "PlayType",
                type: "string",
                required: false,
                description: "Bet choose. Ex: Banker or Player on casino or Gate choose",
                restriction: [],
                schema: []
              },
              {
                name: "ExtraData",
                type: "string",
                required: false,
                description: "game provider info",
                restriction: [],
                schema: []
              },
              {
                name: "BetType",
                type: "string",
                required: false,
                description: "",
                restriction: [],
                schema: []
              }
              
            ]
          }
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
                    name: "error",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "balance",
                    type: "string",
                    required: false,
                    description: "10000.23",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          },
          {
            code: 500,
            message: "InternalServer",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "string",
                    required: false,
                    description: "1 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "corresponding message",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Response samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "ApiKey":"{{api_key}}",
              "action":"cancelBet",
              "data":[
                {
                "UserId": 9088330, 
                "UserName": "003", 
                "OrderTime": "2024-05-02T08:44:56.840Z", 
                "TransGuid": "mm-142540802", 
                "Stake": 3.00, 
                "ProviderId": 21, 
                "GameId": "142540802", 
                "ProductType": "League Of Legends", 
                "GameType": "Slot", 
                "TableName": "54",
                "PlayType": "",
                "ExtraData": "",
                "BetType": ""
                }
              ]
            }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
              "error": 0,
              "message": "",
              "balance": 45491.45,
              "data":[
                {
                "error": 0, 
                "transId": "mm-142540802", 
                "userId": 9088330, 
                "balance": 45491.45,
                }
              ]
            }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": "corresponding message",
              }
          }
        ]
      },
      {
        title: "Settle Bet",
        id: "settle_bet_funky",
        type: ApiEnum.POST,
        endpoint: "",
        description: "Sending transactions when had settled.",
        parameter: [
          {
            name: "REQUEST BODY SCHEMA",
            description: "application/json",
            params: [
              {
                name: "ApiKey",
                type: "string",
                required: true,
                description: "The key pre-agreed between fund provider and middleware system.",
                restriction: [],
                schema: []
              },
              {
                name: "action",
                type: "string",
                required: true,
                description: "bet",
                restriction: [],
                schema: []
              },
              {
                name: "userId",
                type: "string",
                required: true,
                description: "userId in 12live system",
                restriction: [],
                schema: []
              },
              {
                name: "userName",
                type: "string",
                required: true,
                description: "Player username",
                restriction: [],
                schema: []
              },
              {
                name: "OrderTime",
                type: "datetime",
                required: true,
                description: "Bet order time",
                restriction: [],
                schema: []
              },
              {
                name: "TransGuid",
                type: "string",
                required: true,
                description: "Bet transguid. Bet request and Settle request using same TransGuid",
                restriction: [],
                schema: []
              },
              {
                name: "Stake",
                type: "decimal",
                required: true,
                description: "how much user bet",
                restriction: [],
                schema: []
              },
              {
                name: "Winlost",
                type: "decimal",
                required: true,
                description: "Player winlost (included Stake)",
                restriction: [],
                schema: []
              },
              {
                name: "TurnOver",
                type: "decimal",
                required: true,
                description: "",
                restriction: [],
                schema: []
              },
              {
                name: "ProviderId",
                type: "int",
                required: true,
                description: "Game provider Id on 12live",
                restriction: [],
                schema: []
              },
              {
                name: "Provider",
                type: "string",
                required: false,
                description: "Provider name",
                restriction: [],
                schema: []
              },
              {
                name: "GameId",
                type: "string",
                required: true,
                description: "Round Id of game",
                restriction: [],
                schema: []
              },
              {
                name: "ProductType",
                type: "string",
                required: true,
                description: "Game name or Game code",
                restriction: [],
                schema: []
              },
              {
                name: "GameType",
                type: "string",
                required: true,
                description: "Type of game like : Slot, Live..",
                restriction: [],
                schema: []
              },
              {
                name: "TableName",
                type: "string",
                required: true,
                description: "Table name of casino or Game code/ Game name on slot..",
                restriction: [],
                schema: []
              },
              {
                name: "PlayType",
                type: "string",
                required: true,
                description: "Bet choose. Ex: Banker or Player on casino or Gate choose",
                restriction: [],
                schema: []
              },
              {
                name: "ModifyDate",
                type: "datetime",
                required: true,
                description: "Modify date in case resettle we can know when this record resettle.",
                restriction: [],
                schema: []
              },
              {
                name: "WinloseDate",
                type: "datetime",
                required: true,
                description: "Winlose time",
                restriction: [],
                schema: []
              },
              {
                name: "Status",
                type: "String",
                required: true,
                description: "CurrentStatus",
                restriction: [],
                schema: []
              },
              {
                name: "ProviderStatus",
                type: "String",
                required: false,
                description: "Reference provider status",
                restriction: [],
                schema: []
              },
              {
                name: "EndRound",
                type: "boolean",
                required: true,
                description: "Is this settle end of round",
                restriction: [],
                schema: []
              },
              {
                name: "BetType",
                type: "String",
                required: false,
                description: "Bet type",
                restriction: [],
                schema: []
              },
              {
                name: "ReferenceTrans",
                type: "String",
                required: false,
                description: "Reference tranguid",
                restriction: [],
                schema: []
              },
            ]
          }
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
                    name: "error",
                    type: "integer",
                    required: false,
                    description: "0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "balance",
                    type: "string",
                    required: false,
                    description: "10000.23",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          },
          {
            code: 500,
            message: "InternalServer",
            parameter: [
              {
                name: "RESPONSE SCHEMA",
                description: "application/json",
                params: [
                  {
                    name: "error",
                    type: "string",
                    required: false,
                    description: "1 //has error if greater than 0",
                    restriction: [],
                    schema: []
                  },
                  {
                    name: "message",
                    type: "string",
                    required: false,
                    description: "corresponding message",
                    restriction: [],
                    schema: []
                  }
                ]
              }
            ]
          }
        ],
        sample: [
          {
            name: "Response samples",
            payload: "Payload",
            contentType: "application/json",
            json: {
              "ApiKey":"{{api_key}}",
              "action":"settle",
              "data": [
                {
                  "UserId": 9088328,
                  "UserName": "001",
                  "OrderTime": "2024-06-10T08:34:21.963Z",
                  "TransGuid": "Funky_tt_4xJiJiJix6370x101657",
                  "Stake": 30.40,
                  "ActualStake": 30.40,
                  "Winlost": 48.0,
                  "TurnOver": 30.40,
                  "Profit": 17.60,
                  "ModifyDate": "2024-06-10T08:34:22.183Z",
                  "WinloseDate": "2024-06-10T08:34:22.183Z",
                  "GameType": "Slot",
                  "GameId": "102617",
                  "ProductType": "102617",
                  "TableName": "102617",
                  "Status": "Settled",
                  "ProviderStatus": "Settled",
                  "Provider": "Funky",
                  "ProviderId": 21,
                  "CancelType": 0,
                  "ExtraData": "",
                  "BetType": "",
                  "ReferenceTrans": "",
                  "EndRound": true
                }
              ],
            }
          },
          {
            name: "Response samples",
            payload: "200",
            contentType: "application/json",
            json: {
                "balance":45494.45,
                "error":0,
                "message":null,
                "data":[
                {
                "userId":"9088330",
                "transId":"mm-142540802",
                "balance":45494.45,
                "error":0,
                "message":null,
                "dup":false
                }
              ],
              "statementDate":null
              }
          },
          {
            name: "Response samples",
            payload: "500",
            contentType: "application/json",
            json: {
              "error": 1, //has error if greater than 0
              "message": "corresponding message",
              }
          }
        ]
      },
    ]
  },
]

export const erorcodes = [
    {error: "0",	description: (["Function executed successfully"])},
    {error: "1",	description:  ["Some error happened. Refer to the `message` field to get more information."]}
  ]

export const providergametype = [

  {providerid: "1",	providername:  ["AdvantPlay",], gametypes: "Slot"},
  {providerid: "1",	providername:  ["AWC",], gametypes: "SexyBaccarat"},
  {providerid: "2",	providername:  ["MM",], gametypes: "Slot"},
  {providerid: "3",	providername:  ["JILI",], gametypes: "Slot"},
  {providerid: "2",	providername:  ["Funky",], gametypes: "Slot"},
  {providerid: "7",	providername:  ["PGSoft",], gametypes: "Slot"},
  {providerid: "6",	providername:  ["Red Tiger",], gametypes: "Slot"},
  {providerid: "9",	providername:  ["WM Live",], gametypes: "Casino"},
  {providerid: "10",	providername:  ["Spade Gaming",], gametypes: "Slot, Fishing"},
]

export const language = [
  {value: "en-us",	description: (["English"])},
  {value: "zh-tw",	description: (["Traditional Chinese"])},
  {value: "zh-cn",	description: (["Simplified Chinese"])},
  {value: "th-th",	description: (["Thai"])},
]

export const timezone = [
  {
    json : {
      "-12:00": "GMT −12",
      "-11:00": "GMT −11",
      "-10:00": "GMT −10",
      "-9:30": "GMT -9:30",
      "-9:00": "GMT -9",
      "-8:00": "GMT -8",
      "-7:00": "GMT -7",
      "-6:00": "GMT -6",
      "-5:00": "GMT -5",
      "-4:00": "GMT -4",
      "-3:30": "GMT -3:30",
      "-3:00": "GMT -3",
      "-2:00": "GMT -2",
      "-1:00": "GMT -1",
      "00:00": "GMT +0",
      "01:00": "GMT +1",
      "02:00": "GMT +2",
      "03:00": "GMT +3",
      "03:30": "GMT +3:30",
      "04:00": "GMT +4",
      "04:30": "GMT +4:30",
      "05:00": "GMT +5",
      "05:30": "GMT +5:30",
      "06:00": "GMT +6",
      "06:30": "GMT +6:30",
      "07:00": "GMT +7",
      "08:00": "GMT +8",
      "08:30": "GMT +8:30",
      "09:00": "GMT +9",
      "09:30": "GMT +9:30",
      "10:00": "GMT +10",
      "10:30": "GMT +10:30",
      "11:00": "GMT +11",
      "12:00": "GMT +12",
      "12:30": "GMT +12:30",
      "13:00": "GMT +13",
      "14:00": "GMT +14"
  }}
]
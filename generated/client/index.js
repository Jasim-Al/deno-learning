
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  decompressFromBase64,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
} = require('./runtime/data-proxy')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.15.0
 * Query Engine version: 8fbc245156db7124f997f4cecdd8d1219e360944
 */
Prisma.prismaVersion = {
  client: "4.15.0",
  engine: "8fbc245156db7124f997f4cecdd8d1219e360944"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


  const path = require('path')

/**
 * Enums
 */

exports.Prisma.DinosaurScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  Serializable: 'Serializable'
});


exports.Prisma.ModelName = {
  Dinosaur: 'Dinosaur'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Repos\\deno-learning\\generated\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [
      "deno"
    ],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../.env",
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "4.15.0",
  "engineVersion": "8fbc245156db7124f997f4cecdd8d1219e360944",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "sqlite",
  "dataProxy": true,
  "postinstall": false
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  config.dirname = path.join(process.cwd(), "generated/client")
  config.isBundled = true
}

const compressedDMMF = 'N4IgJghgLhC2D2YCmAbEAuUSB2BXWAzhgNoC6ANCAsikesaNnEhiACICW28BEuATiEpgARgDlmGPChSUAZh1Rg6DEE1gt0IDmCEgA1l11aCAYwgoIgyhwIAZW1AxyLBJDYIAlJAEdcHfiRjKH5cd20CAFVsDj9NF1pw2wBJYNCkryQIMAB5bBQAT2dXcIALCAI2JBdcFCgANQswjBCwyigCgAdNEGTsJ2FqvjqMRkktPih4LlNAjX69KwBzFVIAXw8AcRwkfmgg4sSPSM7IKCCAQSd0BLcNsY1WdRZKQ2xjEDMLKz1bBwJrrcMt4/AEDuhWhlorFmhD0h5Uoc3B5vNk8oUkWUKlUanVGihYUD2l0egBlEJcJa/AjbbC7fbGIkRE5nS6Akr3NTjcBIMz8DidKAceDYPRvD5fSzWCL/dlHCIg/yBRklY4xOKYhEq+W2VG5fJFG6qkDlSpDWoNJrxY0dbqscn87BUrY7PbnbXI5mnBlXTFrCggTr82BWAoAaSQhukshAuHVYQAYooUMoSAG4zCkH1kAAPXlpl10t3goH+4ndVYbT6mUpIEOjbTYTq4KA5EQAKyQpigABUSXRQEHbPX6A8epxuLwBAB1WuBPrNgZUJAwBsEeACUzjrg8PiCKumEUAvZcKADqgQHNifBJpR0aOUWBca+wW8p++1FBVhR3khj1gXGIbDUoqYIehk14yBAIgoNaOpNi2fYVn+IC2tuk57rOuxZghS7PAQnQQFurBDgQ9aUCg8DmEKIqsFwi5tp23ZIfmHiyn65CgGhrATruM5zjhi56PhhHEVopHkSAlHUcKopaPRLaMV2vb9tS7FwmE/qcs8rA5J4IG+EqJbGrYkGWDBcGegpKnIaOqEkjxO5TvwWHzrhwnMARRE9BJEB6NJ0CyXRuFKcxqlsY4LTpFpnFco8WhiDkPYGaCyqahEZnQbB6XWSxKhcQ5Wi8c5rmCS2HkaF5YmBvyZF+RRVGBbR8khR2yl5WpkVGoknLcUVTmYQJC7lZQIneSRtWSQFNFyY2DFtWFyERQCUWaessU6fJugooZYE5QQmUWTluEdXZfW9P0SZ1LsFW8qJPmTfVUmNTNwXzUxNmsTKXWlrF519Eu01BSY5hSp1K3dXc63/loOk7alxk6gdn5ZZZSQnapZ2FSADqUld5zSmN1W+f5L3A3NikLZ9RDLXKdx/djuNOqTMnNdW3zSn8P0ctDcU9MgfICq98NGeBHiHdlGno4up2qOdTNLBLSD4zdo2efdE3Dk9QNs9ZoXU+DdNIL1jMUszDWs7Nko/LTHEFXaCWfizTVW6DNvfRDpbrLzm3sANAg5PwyD8AAQgU04cFApTeJYM3DUuh7YMeECnueIZXjeyapugACMj7Ppnv7oAADN+Wf5XzdHbQqu1pZDEEo0d9c2Bjtly4z8D8K2Qeq3zVUPVrzuvVoOD4B1tv1zFMOVyLe3NxljeS0yuWY+3Ds4533fB7d/ea3VQ/k6PsDjx7RtT5XWgC7MQtBbPdfL8jUFN8vrf5lj6+kpvgfb2rlUa+Jj0D5syPifLmnsebn19sVQa2FoRxHjnoDQq5MCfA3Pwaq0CBAgAPEeEIKd+hp0vC+N82c85UALq+cuGAc5lyLqoX2OgUqi32krY6MtV72x6ADIBrsOaGz9D7bkcMa4IzFgvJ+S8TKvwrvLM2zpnqW1YNbTm9huY9W9tpbkmD+Df12GHCOUcLhLCWIEJYLsEGUETsnVODZ07EKobnfO2B7FF1LvIBx9DuSMLvojKyj9zKSPguwtunD7Rfx7oTdW40AGDwti7VgIDwqnwEZo+KM8RHMPnqZReaMW7BLfmvMk4Sf593/jVWJCj4kjzwMfJJYCz6CLSVffkgpb4ZLng/VhWTpEoXlsU3uRMB77zicPEAiSlrJMno0noAB9Q8cYly6lrr4huEjckUwNu/dCfF+AAGENz9F0aHAoRiTFIDMecCxpTonlOGZU0ZesqagNUeA9RqTZkQAAG7yKWaIlhOS2GIQ4fZde2iLjfKOWHU5pj9hXMGXvKaZNdatQ+s89SXt3msBmenJhHSTL+NRoCzZhTHIYQEAAWUvJCk5xiYWXPcr/O6NySYjPJo81FdSXkNMxVobFXBcX33xV0l++SZHY20eSrg1LoXnNhQy65xNAGsuRe9dqnL0UQI2tyGZBB8ACpWeLAF3TRW9PFf7fgpJ8DStpbK+lQlGW7xiXcnWs12VqomfUlJ0zSU7NJG7FyAkDGlBlRc3kVykF+RQeuTc2znLYMsbgk8BDbFEMLu+KQn4nEuPTegaMtCc2eLSYBYCPixHZLWUS2WoT+pkotf60qQaQ37AIHCqJiqKkurepTDlHquV2xBbGvcfqOYNsjsGm1oaW3yvhU6xFiiWqqsWl9T1UtIHcj0vqstBLn5SJNVsn1zlh1SlHYYidzbW1/2ZUq+5bKUXuuXX21d3qEpJU3f8itxqgUhIHQeod9bA1jqbecKd9qFVDLnVUjZ+s0VqPptWv2taj1WBPeOs5k6L1Mvbc6pFrq71LpppMyEa60nePaYKpGwrd1foKfBgGjaz3AZVpEy9WGIMPLwwbCev1aMLGVbwsGXHNXT2Eb8zJnSjUiuo2Kj+cj6NoebUxneZSWU3pVd2+9BGV3cZ/VoBWPClH+v4VMnlPJBatNoqW99ATNCQjyVJ01MnHSKxyXJulvJFMOuU9eztC71P4aM9p2RTn9Mgz4YJnqDN15mRC+zATkyMXPoQzs3ZgQ5WgasXgmxKC7Fpuzg+chzjcsfhkPm7OhaegicyH8qWhqP2SeJfBvTfGDNhfi0Ji+pnr7mdFJZrJ27Ja2Y2VWnTOM5ExeUQFjkkWejRea6FuLWmIGJe0dEGsXZ9BBBS1kO1I0QAZaTWeFNGdKFF3y0+QrJ2c15vcXQ6epHRN4ooxJqjDWRvcLm7F92i23larSZV0CddBvlus5W4FQXKTjcM+FqGJnmk3ws2Rg14iQc1aG2D02wWPsTeh8babrBZuqf419x9CWTMre9DthOib8GHey6my7eXM0FezYzkrN2C3CckL18TdWXvDfB+bQnLWFsk6m41uRJCWT7ByN0N0skQO7Znbctjt7F2cbaz96ecPutvr610oHPT926bG1jqHGu4MjaVgrSXFOkAy/pDNBXeE23ge1jhrtrYnnqtg7j+DBOfOfZURqt5y3zWrdrKYDbYApeU70PtmnhDjskOKzGc7LOU+lYrgw6uD3yN+Mo0E+zRuLqA3d/N4nweLf/UulnGPdvZcuyd0pq9Hay9Qa972yvxtEv/eWVugvVlDckuN5joX5eg8+5No5vGtfbf27l0eDDjrldu/ne3ntD6u/Ef5ryLrwtEf96NQbvdw/Ruj4D9j83vvLc5Ot7P1k8/G9L6863tfbr/M46nzNp2pvWvfZh6HrWnXpStgAUOSi2OYvKvHllqADlgzinlmkVhmmziAD+Bzh1r3tVjzijvVvzhjhDr/iLlvnjiPjPkoHXo/o7s/i3thm/hxjBq8jDr9jvmZvvrnkjsDoSqjivN+gLvIhfmbv/tfudFbhLvftLg3lQdOi7giqvpBu/urkIV/vjj/mPoHpNiHmTmHtgGtpHkEMARAKAVctAcmnTkng4mdhQsnsgV+OzmVndjnlVmJkKs9oXq9tXqXmvpfkoSQSXjbg/pIfLtQaxnIexmrgwdyswU8FzgflZlwbgejtPoLgIX/qLhFuLk5v4RIQ7kEdISxq7jFgoRESklEZfLvi0mwU4Y9vnkfvCGjrwfgckW3t4WkVXtjKIZkeIecJQbkaBkripgHkUd7owcIe0aoSkUQZPhoqUX4RwNdNKCYbTrAfTtYbmkzmnkgWsSgWgfYR1oZK4LrtgfEXzokVwrxmoS0Vvolvytzi4bzm4XgevO9hcYIY+kRr4c8RMRXlMSZtwFAH0IcXcTgScQ0U8ecV8RPhDO8Txp4ZBpcT8TMSMLcU9vcYPifjCZDqkVcSZtdICSicCQ8acawJ8c0a8diTMUsIslUXnqsgSWiUXqfiSV4WSQidPJSS8LEXrq4fSe4djEyXCSySMdvk8PAFSQDhwf1usjwTRm9uCaSViZPr4WILyO6ADB5mBrIYUfQcMdyolnfvMXHtTjAReOYadusVYRYZ+JnihL7PsbQHiTUaidLAyRkQQS8QqUKdcT1pyUcTuoSaCWSCbu6ZMVCdFL4U1sGd8Z6b8aKQCciY6XSc6byUkfwfKSGdcNCSNhGRCRoUwdPEiT6UCccf6TKXwZiemSUfmecA6bScWTyY8YGefmmVGZEWyWKX3nEX6fWUSaQU0cyR6a2R1uyTWbVomXZsmY2W6TmZ/olonDAFwJptSRKQPkmQ2faEGdOVfsKSYDAF3AQEGiOcjnWauT2WflOc2ZCYObae8PuWOoeZwV2SeQGeuU2f2RWcZjMX8feZKaDs+b2amW+S2f2iISqUEPqQTM3iEVqeETqV6iZgrErOqYsYnunjYYgfATYdaXZLaX4AcfGbWU3Mfi6VmRuRebmaMVFuMWRTOSZjcYWfiVwURROS+eeYBZeatBRZOX2QKQOcBWMTIOWUBR+cJrGd6ewYfh+kxWuf+YJexauuGaRWxeRcoY7AJYQUJRioie2VgUWY+eOdJWedxaMvCdGVpRyeJZ2YEt2X+YZQBTxe+ZpW2d+SufpaedmdRVuYlsOfhaOcea5TZe5UpTRTMXOfgoueKRJWOfUaWY0XZcZYKVedyACFYGeAeT5UeXpdFdJlxXFeTCZYlWkjgMoGlfRQmX5VlQ5jlbJcpT3qKc5bUW0BVcXoFfZRpWLpbqBWAAhTkuqf0d5m3kMZ3oqX7lRUFZ5duUls5PsgstavJrHgmknJlqYcsaaTmmQhsRhbnFheVlXPVU6f5TFR/P0sxphgUR9uMpvqyRgTERZVyftU1afp/F3EcpBWdWoRdYueSVruUfDmJUuZFeVdKdlWEs9REq9ZqedTUsUcZoATsuCksLNW5sYUactSaahY4szpsTQnYVnl4o4RFZZVKUPo1sdeDbOqEYfFDbBTDVobWpSjmIjbamVFTotQdihVjehasdjagR4g4XtVFUDZVSDVvAMjIeTTFh9TVb8Tdf9YTb+YdUUqDSUn1a/pBpLcFd9awW0rdb6VZU+QrcLS9Z5jQSrsAlTUNdGbDc5JKtgIzaGsjazQnkdujetRaUXNzTsbjSRvjR2XdQLcTVmaTcbVBZDWPNTY5ddY8OlQ+XrQdcDbpkHRqeLaHbUhbQVSwXvtrbLX7YDQHX0kraLfkRDe9ebZdZbbTb6lahElCgxszYaY7caXAVzZzQ4h7bzR1vdtnbrUTeiYHQXSdcvgMW3ureNYlnRoBrXQQEhSjUsWjZsZYRdqsddjzbdnsbhfadHT+Z+sxVoPyfFbxcJR3X9QTTnZlYLcXnvXlQlRxSpSXtVRrRgaJfzbnb3R4ffYRmGRiepXJRHb7AWTrbpbHQ9V/ZGT/e1n/dWZvS5cA7KbCfvQ5eA9yJSc/WfXnXyXKWNUoV5ZA6VQRUA+fYyRg61WA5ro/dpc4Qxag6/eg3A1fQfYFu0Z1ePaenNe5nMRBcHW9YMdqWnZWR1nMgcuQ9UXgz3cRSBQCEEGqew4XadcXdwzBbw4fb7DMl8j8l3YA6IzvSAMqRI2AAmJRNAL1WLSvtBX5ooa0d3iZjqnqlA9yfrfHdo0wzXgaZw3IwNTw2XenViudig/g2g1Fk41AEY0XcnWoYNZ43w8ozirY/dQQ37oE8E7I6E/I2Y9DaTjMQrK5kzVPdIwsTPezZtQvejcvZ7TadyHaeFb7d3fLQ4y1fA21aQwwsfVUxozU0LTJd/UZpmWWZ0w/b7H8XGbg75VQ2I7Fe/Sut02M70+NVpb45owZXU3Qwg409yLiTE/7dQymeMxYxNcg+sy/aM1s9M1gyZt5UMxlX45s1Vcczs7OSKPOUnHM2081YpcQ1LTMclXuSVQA5Q5c4c9c6A+89PEVbeVHE89vQs68/UyQ3mWQ+CwkQFVC0sw020QE7o5kxPawzky40nSYx9uE59Vdco/MucT82VSM1ozo6qc4xw7i0PXQQoxE0o9qj4/sxSwZVS2BWITiyrbQfIR44S6ZdPNipePCyCQbQlJ1eBTI4Pf1Qy6k+HUtvBXIkrFk5OtPQ3ajU3ZaTIC3Wadse3ThbgHheczHTZnUXEyRa+W85/kqaNTazM3ds0zpb8+a41Zaz04CxPJM0c161uXa2pX6yc5+U/WywNha/4wC5uRM5/Va6xQ6z4SNYG9G7cziUIzScM381o4s2zPlZE6szg2SyI8849Ui7m9fcy2kns6a1vQixK7Zds19UOYW+o66yW66UZcizC5YyFfc2FWKyWbU2W0Tt2xNZ86lXeWG/M25cO8Liiz28Czed862+S1m5C9a9C0C3C1OxxXHe0w2zc8QfE+iyqy5pi25ti7S7y6bbhoy4K2fAG2gIe0S9qiS+m8uXY3u8Xpy2AADIhbk2TXi2EwK1u1E3RUW5m9OzZT+91Wsok7K6rWEQq4o7/Sy6KzuxC6eTB6e3BwB648k+43e1LXqWIeQXPoEYvlAfk87RzZjZtW3avb7G4O+wDeyzOxu128RyZh0WQSmBQRR0nA7dYlqysa3Xq2tdtdPMx+C1Jex/G5u7a0m0+0G6m2PTXmRwETkZR+ltR2YS7eJ6QpJx1tJxh3Ww45feW/Q4gyRjoXMDgCx3LZhzZRZyO6B9yMgLMHWPZwO9ZfWy53O6O4lrABaAKBiKZ+K+Z0Qwp46x1mABwJ8joOZSu8W05351F5xzRYlj+1Izi8hTR4U+aYvTq7YSvegUayaxBxc1B2l7Q5Z8s7C00z5/Y/u/5+Pl07G2/c+0K2Q4M5V2a+27A4211D62cbV6530wW011+4Q2NwF252kmszW9Ax6zQ0N9177NW317WxFy1+l3V/O7sy2yfdU6l5F7N21xN39nVeF4O7t+d+oYpx1bozl1e8Y/S/y0R5l9x1K9y7S3l3p/PYV8U1aTjWU4VevZUy66u9V0Oxx/t4F7Rc6xQ9DwN56ym+pCNyxZ2/D/NxVqG0t5+zA2jx5TG5pApXD+NzFxA1N0T1Myp02xA0l8d606d/uzm5T8G05Td757D/Jxl1T0g0dy0226zy8xT3N5dz0KFQuTTyt76+jy+2kuO6C6ULL5G1j7lTj5Lwkku5OwT7E+rx0/T4r3jw56fWu3J9jxzzs0qT950Ty293Kx98h0y+k9PNh05v+7l7pytcD7q3R0vSD6V7seVxvfryjrJ4i+Lxd/60p2t14y1DJxG1cxr/HzfeT3z1r7HzfsmyT6myG/8Uj8I5B7u7T/L3nxjx13Twr0KY+2n5Wz0P/clyX6L6W9Hw9wLwt0L1Dyl2Z2z7OzH5z822ryn0bzXwnyAGc1t8t4bwe8b+t9yNL489z812L5n9bwz0lbuRO2Cyv9Nx25rxvybzr8VXr9P4T3L1GxX8f7DNd+H4xcn/86n11w+8e+6LB9ZvBy/ny0h57hvve3xUoq59MGqnb7s936BqsFMeHPbD7znoFd/eG1QPga0Y7lMIeI/J/rvT25H8F+NndAVo1a4d9SenFYklgIl6d9TevXZvlV1R6rcX+6fEBuP3zZd88BBlAgXmwb6sBFu5/A3qPzvp0COBWgTblQP66t8GB1/HAT0Cn7CDtut3C+qQMH758RKZvE7n3zkH3d2BDDNFtSygCQDGM0A69hTTUx/8NMuPLFG+xYFYcEm+gx3oh1Vwu8ABAgkACo2+QWDoOnVfRvAEMbWCQmQHFJsYI/zkCsUuqWAK4PrbZcaWMrb/jew9zQZFWKzNJHyiL4ZtqBogp7toK/4m1DBt7ewaYN5TRN7+bHNweAKCbeCkmvgwjjkK+4zEf2Hgrwd701az1tW+rVPG7SuxB9Sm2FVAcazD7cCNmGAkALUPUEVtUOuAvfmXx6CDD6+mPLQJMP4EjCKBSQj9jwP6GzD5+GZKvuvFWGMDHBTfZniL1UGn4th4giflwOkEz9eBRwkAZvyrbKCWeBw+DJcITaKDm2TPYXij1SHnRHh0XIfv0zv69CDmWjL4fz0TZpCgggwjISHWA6fdR6YA9/rJnPbZMNWwnRoaJ2aEGcM8oPToeD26GQ9kevfHbmvyt5kCfhXiRYaxwt5R91+xIt4hsKv5XCb+agfHv8MKH1t2e1IyvmTwP7195hnA24fsIJFt8qRCg64Y32754iW+9wuNkSOFEMihBew94ZKOJ70iJBrAKQfKPxGyDBR0owgc8N9hL9cRxfFIYqOr7HCmBPQZXsu3VESiBRXIuYdZx6AgtLRbwjUTz377t8NB9okUnyIVE2ipRh/dkcNVBFdV4RLDC9hCK4YVD/B5jEUWYMEahCHG4QkoQ7x8Hvdf+sQlDp6LyHgczhF/Wfh7xnzJiyhqYuwVGLSaZinB+Q5kRSLCF28Cxr3FMU7zTEd5XeSraobWKdCqsER6raAf9196A8EBrQ1nCVw6E7UR4aAjDpH1ZED8dRR7HPsp22E8jE+E4x/tm2nHsDphc/Bce1REL2tvhuooREyJzGSUVx67IUTOOG60jn+awwAd/mAFPCYxWgXYc6OtGajbR14nYWKMNEiDjR5fZURPzlHPijRvopUfeNlGfjkh344CSaL/FmjWA+o+MW6LPEej4h5o7firwQmEj/RMolUdUlP678Ch1Y3ntqOQkNcDx3olLpOKIlYTzxtfN/ly095ntQxiI0oQhx/4lj0xLY9InOO5HliBGCyDCafkTFe96xRYxsexObEODFxFY7MVaKAmvigxH/VGOGLcbytSxcQ0iQkMrFHi+hlLdsc5lw6FjWJ0Q3zGpIzGaE2xxQ4Sb3F7FwCkBLQors0KM6h8DREErepRLu48SuJO4u8XuIfGNgk+7rWfmwIrYbjgpVnLyfxXnGmjHBAzMkY53clqCphl4zAUMPCmotbxUUmCR+IEliCspUk04bJMgnyTOu74qSQBJ74vjXRiUu0ShNVHgSlhOk1gfIJokT8vyy4wKbwLCn1diBkrSyT1RYlRCshMQiScpTr41SACMUEABuCgBEcUEJMLET0AACKYQfgEUExGjiea7wJMPwABDaJFg/AFYGDx6AAB3ASDlJGzaJSowRCMapI4mSTyxncYOGHHOnnRtE1KINDHEgJ9EbBbEowXdPa6ciLp5qd6WOk+lxw8iok2wX9JGna8tApgAQOuBUSFSZBVU0/JdIEhwIwg10lSc71MmcSNJPQGABthem0DSp5YggIYE6AkywSqU7qRNTi4AgZg5EyqavzRnmokM/AEhAAFEakgHYsWbTDqKMiM3sFvoNmmn5IGwr081IB2oCoAYs4syoVuRMwKAtpAQXacDP4A9hSg/AeAMdP2mHSFprAU6dhGpmDp+I2EbGQR1ukwzAhWgR6XojWkESYe+7N6dXXDigzUAX0xXD9OMnr4TB3rZKZNT3Agyo4YM2SJbPKHWz/+uQvbAjM7imzf05swIJjLrr4dI5uM/6bDNQgQBiZYwy/iQNpkHdEsFMgUAnJSmeSCZrABmUKB0LMy5JqM+DNog5nczeZac/mbNBHpECtIAYEQWLJbASyUEUs2tDLMQByyPsCsvGfdJ6jKyjAIBAoHtMoDLAvaJ0s6XnNn7oyLZEMoyUNJMmZzbZU0t2WXKDkBw3ZH0z2eDO+kNioZ2QyeQDJ6nHydEp8j2bHHDlbzBppjW+VnPhk7T45a83gRvOTnxhU5dLMSdDOjlZyiZrwiqfXNZm5TQJOEz4JTKPldSi5sORwEzKPlNz/ULcmxiAuvk69BZTLYWWWBgWUAJ5LESWWamHlpzZZmUyDBPL3ldyTMEAWugvJABLyjpRs1eU7JoGgpzUV0t+ZkI/mML9xaSe2cckwUaynp7s0OefNfmXzIZv0m+SIo5H3zXZ0is+S/JFARz25w08BfvO/mIzJFtaUqCnJ0WgLlFNskkWkkgXILmpJEhdsZyQV/z+hKChHj3JRnhByFhUeDEBiQBsKDB8s/uYrKUKnMdZuAToGHDYUcLDZWgY2YEGMU7IBFCi7ecIqsWiKeg4i56S4q0bqKHZug+Rd7KvlKK9F/sj+oDKHk7IQ5qGOlIUudzFLfZBLGOSIEdm3Ugcni/fkDMQzYKs4PM3BYEpTrQ0NxWCjmDgpCFtyLFBC1OvjMcW+xygCXQXFWOdnF4Rlx6ADExPQyCLIRfglRQyNsU5KmphchHh82cU8KPhpMrcSHhZlkLgln0ShXwtrSbBwlkSgoDkFuUUKJl+Cu2bct2WhlNIM894CnOiUHTl5XCk2b1naXnD+hACpAGYq2U3SM56S7Eh4v1x1FvFDsRudLJoWjy6FoyBhUisnwAro8QC12VrJ1l6zF5IKzhXEu4VtKLWHS8YYnIDSwIgF5ir5X7ICEnMUVDVLxe8p8VdKdkI8mgEEpmkhKdmE1cAjAH3wjjp4nnaXHSGBUGyNpZwJ6HSvdYMr85NaZLKlnmp4KSlu8glbRIFXORw862TbDquAUDKoRYq5Fdcqml8qMVxqvcEKrHlqF8V+i0JTMQiVuBnqCqrFewqpWxKQA8SqBZkkhW5j/5/CjGayvhU4ymxHqjJXBItW65w1yw3Jeai2xpYiliixpSB0e6VKTVOhCPFHkzW6qrVOyw1RPwiWsgU19KqFemqAK242V+qjldGMDEFq9wpqvQtHibWxqrZiKhNbatIX2rRVdyweVQsFXYrhV48n5ZWr9Cw5UAK4O3H6uoUBqlV08ENbWvVX1qDKMKuFSkvfn4s81o9UWWiodWaBMVq6pXLQpFXQjPV08atfKv8X+qYlyq6AKquzqprGpp5cnKyGbW5q71NvS9Tsi7VR468/6nea2rLG1SaV4Kzkl+oBG7qo1LKzMBBrSWDqfi3K48Y1XRUXqnVWCKda6oDzuqyl96jrI+vOBzzFVoKy+O+q3UujYF+G/gAYVAKSqvZ9SnNZBqaX5qJ1ha3QmBttxzy0NR6wDX5M3UHKf1yGtyAeqEUiabVmGu1bhvuU9ALgcgOQMpCCCeBdZBAN5aOr5mTLvlo635WfAXWwRKNhheeS+sDUbTxNZyn8WbOZXSbs1qSuTZ/JPXDqlN469eKpvU3dhNN2m3TTJu2Vt4SNnK8VTMSQB5h4Z5wTwBAApVrqaNIAOIKtPo12rNVm46KVJMIh7AkEuwFyQ1MQ2nkAAUuuG9KXKACim89cptYAlaEc5W42CZmS0FBYt8W19dPCa2pbh16WtkdhIn7ZbmABMfLeSOWWn5atZWzLUtkq2jqKFXmnoGNorkNbEsfithTKv4bmDKVSqrDRHzPXTb+VHagQNNX6B+LAt1GfTeytC1tqhSVjVRvrNWCnqcNVW2bUyvhrHaqtnyltRdug13ArGwQ27QWBSF9zdtjq/bRanwCvagdHJctSFtnUYartMxRIX9voBbaH+D2iHdVq1XW0uA4OiWe9t9mfb1JDW+HfkNfXI7CKO2gecButqXhsdp23HZBvx1mTvtVtPcE8o3AvKTtdy9aXzQ213aPNj2uBb5MJWfkYiJOqbRTr9ELa1gC6rWgjlF0A7ydp2p7WPwm3Tz4d62hLf9t7kK6x1lOvcIdqgA07OdeqvHTDtI3hbhWN2nnZrrcna6ZtuugQC9troc6Plxu+nabrC1b4ftuCuXVrtR3i6QdlqWAIbpd1Q618DOmZVLqJ10UfdNuv3Yrvt38AbawehyHTtvXya4dwrYndZtJ3hs49OupjfTWT12hU9M6ozXOsngTUfNGmsAFpuOk6bblegVbXqLjFW6kdYu+PYN3GmLaK6U1QRkXo5JN68aiOsgO3vz0lT6tkeznFHQ11t6+daOpXXwLJmq7NamdWXdntH127O9S+77fDosDKcY90DTzQLuBHirmdDu75P3sb2Gsh9rekffLrz2b7PhBjI5cpQmpNywdTut7cH0S2kYD9PKm5fPuP1Z9QlZ+xPVjs/1o6udHdauH/uw28rADW+ifdLWn2wHttD+vbdBPgUmaZi2uffKgZR3wH/dmBwXVdtAOF6IDOO7/dSu0AwH199+wgx3vH0q6d9U+jkvgbJ3oHgdxBk/Z7pwM/Udct+nPW6wYNj7uDwB0/SQpvVBqVt1+72sPqEPpQj9iB5g4TtYPyGN9GB38VgfnV8GZd3pdg7npEOP6xD2AkzdMTGSl1zw80jaasqsBjK9AnyK0CoBoO3Q9AuBoKHqUTqOGCQBSdhWYDcO74QAiWHsHsCThEQ4464LRdgDsBIBPkrq7w2EGcOkhdgHACwBwAABehKcwzsW8ByBTowASPReE6CdBKQacHFT0SPAoQpDD8vQJ0AJB7A0Al8c1ARhVnErMwrAVo0Cv9WdGgFgcMlbrI6NGAujtaPo9rIGPuJVZO064JtL0ZqyoAMhyYwCFGPkrBjix+YxrP6PxbWjc81Y2ACo3+q5V1ZOGRaryDPrV1NAJdVXMXXdEV1k62MLblYAUbl1Zxu4xcfM2gErjZmpAPsdXVPGdjWgP4xZrYXerdg0xkE76peNxpF5tdVgCwtYZsKTEbO56YIOeVRLpZJC0UnOAqOPMUEqWYwHfuOn8gjjxAMZFFpbBIAWtegJrZSfWBS6gAA='
const decompressedDMMF = decompressFromBase64(compressedDMMF)
// We are parsing 2 times, as we want independent objects, because
// DMMFClass introduces circular references in the dmmf object
const dmmf = JSON.parse(decompressedDMMF)
exports.Prisma.dmmf = JSON.parse(decompressedDMMF)
config.document = dmmf


config.inlineSchema = 'Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgICAgICAgID0gInByaXNtYS1jbGllbnQtanMiCiAgcHJldmlld0ZlYXR1cmVzID0gWyJkZW5vIl0KICBvdXRwdXQgICAgICAgICAgPSAiLi4vZ2VuZXJhdGVkL2NsaWVudCIKfQoKZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgPSAic3FsaXRlIgogIHVybCAgICAgID0gZW52KCJEQVRBQkFTRV9VUkwiKQp9Cgptb2RlbCBEaW5vc2F1ciB7CiAgaWQgICAgICAgICAgSW50ICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIG5hbWUgICAgICAgIFN0cmluZyAgQHVuaXF1ZQogIGRlc2NyaXB0aW9uIFN0cmluZz8KfQo='
config.inlineSchemaHash = '5d999470c4865aab51584f4ac2ec8edec6ba5df09b6bdf114725cd4bfa8f830e'

config.inlineDatasources = {
  "db": {
    "url": {
      "fromEnvVar": "DATABASE_URL",
      "value": null
    }
  }
}


const { warnEnvConflicts } = require('./runtime/data-proxy')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})


const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)


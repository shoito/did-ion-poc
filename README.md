# did:ion PoC

- create a did:ion
- resolve a did:ion
- update a did:ion
- recover a did:ion
- deactivate a did:ion

## decentralized-identity/ion-tools

### create a did:ion

```bash
$ npm run ion:create

> did-ion-poc@1.0.0 ion:create
> node create-did.js

Long-form DID: did:ion:EiBVNGrMAC-1rM5iwOeDk2uusaH4ykcL6SqsfRl2MFor7w:eyJkZWx0YSI6eyJwYXRjaGVzIjpbeyJhY3Rpb24iOiJyZXBsYWNlIiwiZG9jdW1lbnQiOnsicHVibGljS2V5cyI6W3siaWQiOiJrZXktMSIsInB1YmxpY0tleUp3ayI6eyJjcnYiOiJzZWNwMjU2azEiLCJrdHkiOiJFQyIsIngiOiItUVo5UFVBeWROLWJlQkpHU2wxclVRVk1BTW9ra1F2Q3dxMXl1NmxKMEJFIiwieSI6IjFaVkZxdDQwQXdtM0R1OElwUUE1OEJmZnBvOHV6UTVVb1dsR3hiTEppTEkifSwicHVycG9zZXMiOlsiYXV0aGVudGljYXRpb24iXSwidHlwZSI6IkVjZHNhU2VjcDI1NmsxVmVyaWZpY2F0aW9uS2V5MjAxOSJ9XSwic2VydmljZXMiOlt7ImlkIjoiZG9tYWluLTEiLCJzZXJ2aWNlRW5kcG9pbnQiOiJodHRwczovL2Zvby5leGFtcGxlLmNvbSIsInR5cGUiOiJMaW5rZWREb21haW5zIn1dfX1dLCJ1cGRhdGVDb21taXRtZW50IjoiRWlDVWExYXZQQ3JOZEpTczlCZW5hUktlZVN2R3NvaVF4bXFEVGV2czkwUFA0USJ9LCJzdWZmaXhEYXRhIjp7ImRlbHRhSGFzaCI6IkVpQng1NWM0bkRnaVIyZ1RlUE9rZUNtMkcwS2xWV3l2Y2tXeVlYRFNoMTlPa2ciLCJyZWNvdmVyeUNvbW1pdG1lbnQiOiJFaUJESV9mTzcxUTNkb1RJV1FpMTBEX0hFaEhCWE5TZ1A0empWdlU3VUdxXzNRIn19
Short-form DID: did:ion:EiBVNGrMAC-1rM5iwOeDk2uusaH4ykcL6SqsfRl2MFor7w
```

### resolve a did:ion

```bash
$ npm run ion:resolve

> did-ion-poc@1.0.0 ion:resolve
> node resolve-did.js

{
  "@context": "https://w3id.org/did-resolution/v1",
  "didDocument": {
    "id": "did:ion:EiBVNGrMAC-1rM5iwOeDk2uusaH4ykcL6SqsfRl2MFor7w:eyJkZWx0YSI6eyJwYXRjaGVzIjpbeyJhY3Rpb24iOiJyZXBsYWNlIiwiZG9jdW1lbnQiOnsicHVibGljS2V5cyI6W3siaWQiOiJrZXktMSIsInB1YmxpY0tleUp3ayI6eyJjcnYiOiJzZWNwMjU2azEiLCJrdHkiOiJFQyIsIngiOiItUVo5UFVBeWROLWJlQkpHU2wxclVRVk1BTW9ra1F2Q3dxMXl1NmxKMEJFIiwieSI6IjFaVkZxdDQwQXdtM0R1OElwUUE1OEJmZnBvOHV6UTVVb1dsR3hiTEppTEkifSwicHVycG9zZXMiOlsiYXV0aGVudGljYXRpb24iXSwidHlwZSI6IkVjZHNhU2VjcDI1NmsxVmVyaWZpY2F0aW9uS2V5MjAxOSJ9XSwic2VydmljZXMiOlt7ImlkIjoiZG9tYWluLTEiLCJzZXJ2aWNlRW5kcG9pbnQiOiJodHRwczovL2Zvby5leGFtcGxlLmNvbSIsInR5cGUiOiJMaW5rZWREb21haW5zIn1dfX1dLCJ1cGRhdGVDb21taXRtZW50IjoiRWlDVWExYXZQQ3JOZEpTczlCZW5hUktlZVN2R3NvaVF4bXFEVGV2czkwUFA0USJ9LCJzdWZmaXhEYXRhIjp7ImRlbHRhSGFzaCI6IkVpQng1NWM0bkRnaVIyZ1RlUE9rZUNtMkcwS2xWV3l2Y2tXeVlYRFNoMTlPa2ciLCJyZWNvdmVyeUNvbW1pdG1lbnQiOiJFaUJESV9mTzcxUTNkb1RJV1FpMTBEX0hFaEhCWE5TZ1A0empWdlU3VUdxXzNRIn19",
    "@context": [
      "https://www.w3.org/ns/did/v1",
      {
        "@base": "did:ion:EiBVNGrMAC-1rM5iwOeDk2uusaH4ykcL6SqsfRl2MFor7w:eyJkZWx0YSI6eyJwYXRjaGVzIjpbeyJhY3Rpb24iOiJyZXBsYWNlIiwiZG9jdW1lbnQiOnsicHVibGljS2V5cyI6W3siaWQiOiJrZXktMSIsInB1YmxpY0tleUp3ayI6eyJjcnYiOiJzZWNwMjU2azEiLCJrdHkiOiJFQyIsIngiOiItUVo5UFVBeWROLWJlQkpHU2wxclVRVk1BTW9ra1F2Q3dxMXl1NmxKMEJFIiwieSI6IjFaVkZxdDQwQXdtM0R1OElwUUE1OEJmZnBvOHV6UTVVb1dsR3hiTEppTEkifSwicHVycG9zZXMiOlsiYXV0aGVudGljYXRpb24iXSwidHlwZSI6IkVjZHNhU2VjcDI1NmsxVmVyaWZpY2F0aW9uS2V5MjAxOSJ9XSwic2VydmljZXMiOlt7ImlkIjoiZG9tYWluLTEiLCJzZXJ2aWNlRW5kcG9pbnQiOiJodHRwczovL2Zvby5leGFtcGxlLmNvbSIsInR5cGUiOiJMaW5rZWREb21haW5zIn1dfX1dLCJ1cGRhdGVDb21taXRtZW50IjoiRWlDVWExYXZQQ3JOZEpTczlCZW5hUktlZVN2R3NvaVF4bXFEVGV2czkwUFA0USJ9LCJzdWZmaXhEYXRhIjp7ImRlbHRhSGFzaCI6IkVpQng1NWM0bkRnaVIyZ1RlUE9rZUNtMkcwS2xWV3l2Y2tXeVlYRFNoMTlPa2ciLCJyZWNvdmVyeUNvbW1pdG1lbnQiOiJFaUJESV9mTzcxUTNkb1RJV1FpMTBEX0hFaEhCWE5TZ1A0empWdlU3VUdxXzNRIn19"
      }
    ],
    "service": [
      {
        "id": "#domain-1",
        "type": "LinkedDomains",
        "serviceEndpoint": "https://foo.example.com"
      }
    ],
    "verificationMethod": [
      {
        "id": "#key-1",
        "controller": "did:ion:EiBVNGrMAC-1rM5iwOeDk2uusaH4ykcL6SqsfRl2MFor7w:eyJkZWx0YSI6eyJwYXRjaGVzIjpbeyJhY3Rpb24iOiJyZXBsYWNlIiwiZG9jdW1lbnQiOnsicHVibGljS2V5cyI6W3siaWQiOiJrZXktMSIsInB1YmxpY0tleUp3ayI6eyJjcnYiOiJzZWNwMjU2azEiLCJrdHkiOiJFQyIsIngiOiItUVo5UFVBeWROLWJlQkpHU2wxclVRVk1BTW9ra1F2Q3dxMXl1NmxKMEJFIiwieSI6IjFaVkZxdDQwQXdtM0R1OElwUUE1OEJmZnBvOHV6UTVVb1dsR3hiTEppTEkifSwicHVycG9zZXMiOlsiYXV0aGVudGljYXRpb24iXSwidHlwZSI6IkVjZHNhU2VjcDI1NmsxVmVyaWZpY2F0aW9uS2V5MjAxOSJ9XSwic2VydmljZXMiOlt7ImlkIjoiZG9tYWluLTEiLCJzZXJ2aWNlRW5kcG9pbnQiOiJodHRwczovL2Zvby5leGFtcGxlLmNvbSIsInR5cGUiOiJMaW5rZWREb21haW5zIn1dfX1dLCJ1cGRhdGVDb21taXRtZW50IjoiRWlDVWExYXZQQ3JOZEpTczlCZW5hUktlZVN2R3NvaVF4bXFEVGV2czkwUFA0USJ9LCJzdWZmaXhEYXRhIjp7ImRlbHRhSGFzaCI6IkVpQng1NWM0bkRnaVIyZ1RlUE9rZUNtMkcwS2xWV3l2Y2tXeVlYRFNoMTlPa2ciLCJyZWNvdmVyeUNvbW1pdG1lbnQiOiJFaUJESV9mTzcxUTNkb1RJV1FpMTBEX0hFaEhCWE5TZ1A0empWdlU3VUdxXzNRIn19",
        "type": "EcdsaSecp256k1VerificationKey2019",
        "publicKeyJwk": {
          "crv": "secp256k1",
          "kty": "EC",
          "x": "-QZ9PUAydN-beBJGSl1rUQVMAMokkQvCwq1yu6lJ0BE",
          "y": "1ZVFqt40Awm3Du8IpQA58Bffpo8uzQ5UoWlGxbLJiLI"
        }
      }
    ],
    "authentication": [
      "#key-1"
    ]
  },
  "didDocumentMetadata": {
    "method": {
      "published": false,
      "recoveryCommitment": "EiBDI_fO71Q3doTIWQi10D_HEhHBXNSgP4zjVvU7UGq_3Q",
      "updateCommitment": "EiCUa1avPCrNdJSs9BenaRKeeSvGsoiQxmqDTevs90PP4Q"
    },
    "equivalentId": [
      "did:ion:EiBVNGrMAC-1rM5iwOeDk2uusaH4ykcL6SqsfRl2MFor7w"
    ]
  }
}
```

### update a did:ion

```bash
$ npm run ion:update

> did-ion-poc@1.0.0 ion:update
> node update-did.js

{
  "ops": [
    {
      "operation": "create",
      "content": {
        "publicKeys": [
          {
            "id": "key-1",
            "type": "EcdsaSecp256k1VerificationKey2019",
            "publicKeyJwk": {
              "kty": "EC",
              "crv": "secp256k1",
              "x": "-QZ9PUAydN-beBJGSl1rUQVMAMokkQvCwq1yu6lJ0BE",
              "y": "1ZVFqt40Awm3Du8IpQA58Bffpo8uzQ5UoWlGxbLJiLI"
            },
            "purposes": [
              "authentication"
            ]
          }
        ],
        "services": [
          {
            "id": "domain-1",
            "type": "LinkedDomains",
            "serviceEndpoint": "https://foo.example.com"
          }
        ]
      },
      "recovery": {
        "publicJwk": {
          "kty": "EC",
          "crv": "secp256k1",
          "x": "glC4vBiQauZZ3OCG5EgL9LqxmRMMiTmDzHrShQcWfKU",
          "y": "gUH1JaJ7FAiq7vtEY4UNcXeHuApq-DRNIBhIyWomhQQ"
        },
        "privateJwk": {
          "kty": "EC",
          "crv": "secp256k1",
          "x": "glC4vBiQauZZ3OCG5EgL9LqxmRMMiTmDzHrShQcWfKU",
          "y": "gUH1JaJ7FAiq7vtEY4UNcXeHuApq-DRNIBhIyWomhQQ",
          "d": "2RzrmukSoBaw5XFKlj2TrL3fcocfG3gu2KeOoalIkKM"
        }
      },
      "update": {
        "publicJwk": {
          "kty": "EC",
          "crv": "secp256k1",
          "x": "RxiEJcdYEx0_sHSvST3zezAFWn09iarfHiMLH5cu_Ho",
          "y": "tm2tgJUCFAOPwcOMjyRw-jQY8sP-qs8C-Vt7ZGp7hEA"
        },
        "privateJwk": {
          "kty": "EC",
          "crv": "secp256k1",
          "x": "RxiEJcdYEx0_sHSvST3zezAFWn09iarfHiMLH5cu_Ho",
          "y": "tm2tgJUCFAOPwcOMjyRw-jQY8sP-qs8C-Vt7ZGp7hEA",
          "d": "8U_-6v5ZbnCMZKAnjsR7gNJdtEnNVdbZ5-i_WN3RGvs"
        }
      }
    },
    {
      "operation": "update",
      "content": {
        "addPublicKeys": [
          {
            "id": "key-2",
            "type": "EcdsaSecp256k1VerificationKey2019",
            "publicKeyJwk": {
              "kty": "EC",
              "crv": "secp256k1",
              "x": "q_UR7tRl96jpC6JWfeV-fWpE4qrQnc35xm092XuCI8U",
              "y": "Kr7pxi4nv9DQXYkOYN8hcLQGSrT6ihI2jZ-nTY3r7HM"
            },
            "purposes": [
              "authentication"
            ]
          }
        ],
        "addServices": [
          {
            "id": "some-service-2",
            "type": "SomeServiceType",
            "serviceEndpoint": "http://www.example.com"
          }
        ]
      },
      "previous": {
        "operation": "create",
        "content": {
          "publicKeys": [
            {
              "id": "key-1",
              "type": "EcdsaSecp256k1VerificationKey2019",
              "publicKeyJwk": {
                "kty": "EC",
                "crv": "secp256k1",
                "x": "-QZ9PUAydN-beBJGSl1rUQVMAMokkQvCwq1yu6lJ0BE",
                "y": "1ZVFqt40Awm3Du8IpQA58Bffpo8uzQ5UoWlGxbLJiLI"
              },
              "purposes": [
                "authentication"
              ]
            }
          ],
          "services": [
            {
              "id": "domain-1",
              "type": "LinkedDomains",
              "serviceEndpoint": "https://foo.example.com"
            }
          ]
        },
        "recovery": {
          "publicJwk": {
            "kty": "EC",
            "crv": "secp256k1",
            "x": "glC4vBiQauZZ3OCG5EgL9LqxmRMMiTmDzHrShQcWfKU",
            "y": "gUH1JaJ7FAiq7vtEY4UNcXeHuApq-DRNIBhIyWomhQQ"
          },
          "privateJwk": {
            "kty": "EC",
            "crv": "secp256k1",
            "x": "glC4vBiQauZZ3OCG5EgL9LqxmRMMiTmDzHrShQcWfKU",
            "y": "gUH1JaJ7FAiq7vtEY4UNcXeHuApq-DRNIBhIyWomhQQ",
            "d": "2RzrmukSoBaw5XFKlj2TrL3fcocfG3gu2KeOoalIkKM"
          }
        },
        "update": {
          "publicJwk": {
            "kty": "EC",
            "crv": "secp256k1",
            "x": "RxiEJcdYEx0_sHSvST3zezAFWn09iarfHiMLH5cu_Ho",
            "y": "tm2tgJUCFAOPwcOMjyRw-jQY8sP-qs8C-Vt7ZGp7hEA"
          },
          "privateJwk": {
            "kty": "EC",
            "crv": "secp256k1",
            "x": "RxiEJcdYEx0_sHSvST3zezAFWn09iarfHiMLH5cu_Ho",
            "y": "tm2tgJUCFAOPwcOMjyRw-jQY8sP-qs8C-Vt7ZGp7hEA",
            "d": "8U_-6v5ZbnCMZKAnjsR7gNJdtEnNVdbZ5-i_WN3RGvs"
          }
        }
      },
      "update": {
        "publicJwk": {
          "kty": "EC",
          "crv": "secp256k1",
          "x": "eZTANdeE_Ip4kmj3nFPPplAuyx6IuDd0cHGu8JbE6Gs",
          "y": "A_zR2bAM16YY03JRNaHYCIaQG_fet3UO8Mu9HrJHcck"
        },
        "privateJwk": {
          "kty": "EC",
          "crv": "secp256k1",
          "x": "eZTANdeE_Ip4kmj3nFPPplAuyx6IuDd0cHGu8JbE6Gs",
          "y": "A_zR2bAM16YY03JRNaHYCIaQG_fet3UO8Mu9HrJHcck",
          "d": "uJcMkRN3-KoakiABXI8tWmFTmnstxJKeBUH3rDS_sgM"
        }
      }
    }
  ]
}
```

### recover a did:ion

```bash
$ npm run ion:recover

> did-ion-poc@1.0.0 ion:recover
> node recover-did.js

{
  "ops": {
    "operation": "recover",
    "content": {
      "removePublicKeys": [
        "key-2"
      ],
      "addPublicKeys": [
        {
          "id": "key-3",
          "type": "EcdsaSecp256k1VerificationKey2019",
          "publicKeyJwk": {
            "kty": "EC",
            "crv": "secp256k1",
            "x": "jMiMtK3_b8p_4JQIIZ1BAmGyOWsNQ4b60iD69Kg5W5s",
            "y": "kpUg7tywkKTeXTCd108B4JopvoLHGTUzTg2yuzAm0lc"
          },
          "purposes": [
            "authentication"
          ]
        }
      ],
      "removeServices": [
        "some-service-2"
      ],
      "addServices": [
        {
          "id": "some-service-3",
          "type": "SomeServiceType",
          "serviceEndpoint": "http://www.example.com"
        }
      ]
    },
    "previous": {
      "operation": "create",
      "content": {
        "publicKeys": [
          {
            "id": "key-1",
            "type": "EcdsaSecp256k1VerificationKey2019",
            "publicKeyJwk": {
              "kty": "EC",
              "crv": "secp256k1",
              "x": "-QZ9PUAydN-beBJGSl1rUQVMAMokkQvCwq1yu6lJ0BE",
              "y": "1ZVFqt40Awm3Du8IpQA58Bffpo8uzQ5UoWlGxbLJiLI"
            },
            "purposes": [
              "authentication"
            ]
          }
        ],
        "services": [
          {
            "id": "domain-1",
            "type": "LinkedDomains",
            "serviceEndpoint": "https://foo.example.com"
          }
        ]
      },
      "recovery": {
        "publicJwk": {
          "kty": "EC",
          "crv": "secp256k1",
          "x": "glC4vBiQauZZ3OCG5EgL9LqxmRMMiTmDzHrShQcWfKU",
          "y": "gUH1JaJ7FAiq7vtEY4UNcXeHuApq-DRNIBhIyWomhQQ"
        },
        "privateJwk": {
          "kty": "EC",
          "crv": "secp256k1",
          "x": "glC4vBiQauZZ3OCG5EgL9LqxmRMMiTmDzHrShQcWfKU",
          "y": "gUH1JaJ7FAiq7vtEY4UNcXeHuApq-DRNIBhIyWomhQQ",
          "d": "2RzrmukSoBaw5XFKlj2TrL3fcocfG3gu2KeOoalIkKM"
        }
      },
      "update": {
        "publicJwk": {
          "kty": "EC",
          "crv": "secp256k1",
          "x": "RxiEJcdYEx0_sHSvST3zezAFWn09iarfHiMLH5cu_Ho",
          "y": "tm2tgJUCFAOPwcOMjyRw-jQY8sP-qs8C-Vt7ZGp7hEA"
        },
        "privateJwk": {
          "kty": "EC",
          "crv": "secp256k1",
          "x": "RxiEJcdYEx0_sHSvST3zezAFWn09iarfHiMLH5cu_Ho",
          "y": "tm2tgJUCFAOPwcOMjyRw-jQY8sP-qs8C-Vt7ZGp7hEA",
          "d": "8U_-6v5ZbnCMZKAnjsR7gNJdtEnNVdbZ5-i_WN3RGvs"
        }
      }
    },
    "recovery": {
      "publicJwk": {
        "kty": "EC",
        "crv": "secp256k1",
        "x": "6weDrR8Zdpjnk4t7RnlLZRTZDOi_RoWrqEwQoDVlhvo",
        "y": "qfXMC-d-kgVBC3FVwiM4ldxdxUb-5_5EzV0WMkVaYdE"
      },
      "privateJwk": {
        "kty": "EC",
        "crv": "secp256k1",
        "x": "6weDrR8Zdpjnk4t7RnlLZRTZDOi_RoWrqEwQoDVlhvo",
        "y": "qfXMC-d-kgVBC3FVwiM4ldxdxUb-5_5EzV0WMkVaYdE",
        "d": "7i6V6E6_44swTqWo54j0nIWDaxgfXtKh1Pv0pOF1JzI"
      }
    },
    "update": {
      "publicJwk": {
        "kty": "EC",
        "crv": "secp256k1",
        "x": "E-Vgiwa_moq9E1UlnSCL-6YVttgno2uYcEwrf5K9wiU",
        "y": "l_D7gzZNAoGlf-XaGUQYBAbOBTx3YOaHR5bXqBwvMQc"
      },
      "privateJwk": {
        "kty": "EC",
        "crv": "secp256k1",
        "x": "E-Vgiwa_moq9E1UlnSCL-6YVttgno2uYcEwrf5K9wiU",
        "y": "l_D7gzZNAoGlf-XaGUQYBAbOBTx3YOaHR5bXqBwvMQc",
        "d": "CZnkCMGGJ9ZlxtWAD3tnieXPsozUaiDDPDKiAvUNw80"
      }
    }
  }
}
```

### deactivate a did:ion

```bash
$ npm run ion:deactivate

> did-ion-poc@1.0.0 ion:deactivate
> node deactivate-did.js

{
  "operation": "deactivate",
  "previous": {
    "operation": "create",
    "content": {
      "publicKeys": [
        {
          "id": "key-1",
          "type": "EcdsaSecp256k1VerificationKey2019",
          "publicKeyJwk": {
            "kty": "EC",
            "crv": "secp256k1",
            "x": "-QZ9PUAydN-beBJGSl1rUQVMAMokkQvCwq1yu6lJ0BE",
            "y": "1ZVFqt40Awm3Du8IpQA58Bffpo8uzQ5UoWlGxbLJiLI"
          },
          "purposes": [
            "authentication"
          ]
        }
      ],
      "services": [
        {
          "id": "domain-1",
          "type": "LinkedDomains",
          "serviceEndpoint": "https://foo.example.com"
        }
      ]
    },
    "recovery": {
      "publicJwk": {
        "kty": "EC",
        "crv": "secp256k1",
        "x": "glC4vBiQauZZ3OCG5EgL9LqxmRMMiTmDzHrShQcWfKU",
        "y": "gUH1JaJ7FAiq7vtEY4UNcXeHuApq-DRNIBhIyWomhQQ"
      },
      "privateJwk": {
        "kty": "EC",
        "crv": "secp256k1",
        "x": "glC4vBiQauZZ3OCG5EgL9LqxmRMMiTmDzHrShQcWfKU",
        "y": "gUH1JaJ7FAiq7vtEY4UNcXeHuApq-DRNIBhIyWomhQQ",
        "d": "2RzrmukSoBaw5XFKlj2TrL3fcocfG3gu2KeOoalIkKM"
      }
    },
    "update": {
      "publicJwk": {
        "kty": "EC",
        "crv": "secp256k1",
        "x": "RxiEJcdYEx0_sHSvST3zezAFWn09iarfHiMLH5cu_Ho",
        "y": "tm2tgJUCFAOPwcOMjyRw-jQY8sP-qs8C-Vt7ZGp7hEA"
      },
      "privateJwk": {
        "kty": "EC",
        "crv": "secp256k1",
        "x": "RxiEJcdYEx0_sHSvST3zezAFWn09iarfHiMLH5cu_Ho",
        "y": "tm2tgJUCFAOPwcOMjyRw-jQY8sP-qs8C-Vt7ZGp7hEA",
        "d": "8U_-6v5ZbnCMZKAnjsR7gNJdtEnNVdbZ5-i_WN3RGvs"
      }
    }
  }
}
```

## decentralized-identity/ion

ION CLI  
https://github.com/decentralized-identity/ion/blob/master/cli.md

> Use one of the supported commands below (currently limited to Create).

```bash
$ git clone https://github.com/decentralized-identity/ion
$ cd ion
$ npm ci
$ npm run build
$ npm install -g .
```

## create a did:ion

```bash
$ ion operation create
DID: did:ion:EiAoY4agcIExO-N2glG_X4n6YPRb-Lqanamto61jIyRZ9g

Recovery private key saved as: EiAoY4agcIExO-N2glG_X4n6YPRb-Lqanamto61jIyRZ9g-RecoveryPrivateKey.json
Update private key saved as: EiAoY4agcIExO-N2glG_X4n6YPRb-Lqanamto61jIyRZ9g-UpdatePrivateKey.json
Signing private key saved as: EiAoY4agcIExO-N2glG_X4n6YPRb-Lqanamto61jIyRZ9g-SigningPrivateKey.json

Create request body:
{
  "type": "create",
  "suffixData": {
    "deltaHash": "EiCD91HJxAqTm4xiBE64roNFG3oB124bsvV3CkE-eEK3FQ",
    "recoveryCommitment": "EiA25fW4DkYmNG9oy61f_98LaJxf_miLRc0YDXhllvxKIQ"
  },
  "delta": {
    "updateCommitment": "EiDSr2BBpbG8HIA4AAlN6PmmIqbugdBTsS4Pp79oyxud1w",
    "patches": [
      {
        "action": "replace",
        "document": {
          "publicKeys": [
            {
              "id": "signing-key",
              "type": "EcdsaSecp256k1VerificationKey2019",
              "publicKeyJwk": {
                "kty": "EC",
                "crv": "secp256k1",
                "x": "jXAFPqMi_DJv1KMtZ06QfKiV2CiD_Eft3iMf2AYgYB4",
                "y": "5Z2BvJnb-u37RbhaDZFpMGiVpf_OVmzxWf2G9-_1K9g"
              }
            }
          ]
        }
      }
    ]
  }
}

Long-form DID:
did:ion:EiAoY4agcIExO-N2glG_X4n6YPRb-Lqanamto61jIyRZ9g:eyJkZWx0YSI6eyJwYXRjaGVzIjpbeyJhY3Rpb24iOiJyZXBsYWNlIiwiZG9jdW1lbnQiOnsicHVibGljS2V5cyI6W3siaWQiOiJzaWduaW5nLWtleSIsInB1YmxpY0tleUp3ayI6eyJjcnYiOiJzZWNwMjU2azEiLCJrdHkiOiJFQyIsIngiOiJqWEFGUHFNaV9ESnYxS010WjA2UWZLaVYyQ2lEX0VmdDNpTWYyQVlnWUI0IiwieSI6IjVaMkJ2Sm5iLXUzN1JiaGFEWkZwTUdpVnBmX09WbXp4V2YyRzktXzFLOWcifSwidHlwZSI6IkVjZHNhU2VjcDI1NmsxVmVyaWZpY2F0aW9uS2V5MjAxOSJ9XX19XSwidXBkYXRlQ29tbWl0bWVudCI6IkVpRFNyMkJCcGJHOEhJQTRBQWxONlBtbUlxYnVnZEJUc1M0UHA3OW95eHVkMXcifSwic3VmZml4RGF0YSI6eyJkZWx0YUhhc2giOiJFaUNEOTFISnhBcVRtNHhpQkU2NHJvTkZHM29CMTI0YnN2VjNDa0UtZUVLM0ZRIiwicmVjb3ZlcnlDb21taXRtZW50IjoiRWlBMjVmVzREa1ltTkc5b3k2MWZfOThMYUp4Zl9taUxSYzBZRFhobGx2eEtJUSJ9fQ

DID suffix data:
{
  "deltaHash": "EiCD91HJxAqTm4xiBE64roNFG3oB124bsvV3CkE-eEK3FQ",
  "recoveryCommitment": "EiA25fW4DkYmNG9oy61f_98LaJxf_miLRc0YDXhllvxKIQ"
}

Document delta:
{
  "updateCommitment": "EiDSr2BBpbG8HIA4AAlN6PmmIqbugdBTsS4Pp79oyxud1w",
  "patches": [
    {
      "action": "replace",
      "document": {
        "publicKeys": [
          {
            "id": "signing-key",
            "type": "EcdsaSecp256k1VerificationKey2019",
            "publicKeyJwk": {
              "kty": "EC",
              "crv": "secp256k1",
              "x": "jXAFPqMi_DJv1KMtZ06QfKiV2CiD_Eft3iMf2AYgYB4",
              "y": "5Z2BvJnb-u37RbhaDZFpMGiVpf_OVmzxWf2G9-_1K9g"
            }
          }
        ]
      }
    }
  ]
}
```

import { gql } from '@apollo/client'

export const GET_ORDER = gql`
  query MyQuery {
    pegasus_order {
      finalValue
    }
  }
`
export const CAD_ORDER = gql`
  mutation MyMutation(
    $cepDestinatio: bigint
    $cpfRecipient: bigint
    $cpfSender: bigint
    $finalValue: numeric
    $height: numeric
    $length: numeric
    $weight: numeric
    $width: numeric
  ) {
    insert_pegasus_order(
      objects: {
        cepDestination: $cepDestinatio
        cpfRecipient: $cpfRecipient
        cpfSender: $cpfSender
        finalValue: $finalValue
        height: $height
        length: $length
        weight: $weight
        width: $width
      }
    ) {
      returning {
        tagCode
        orderCode
      }
    }
  }
`

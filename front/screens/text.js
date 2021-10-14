{/* <Accordion.Summary>
{ws.name}
<Accordion.Icon />
{console.log("ESTE SII==>", ws)}
</Accordion.Summary>
<Accordion.Details>
<HStack space={3} justifyContent="space-between">
  <Avatar
    size="48px"
    source={{
      uri: `${ws.user_profile}`,
    }}
  />
  <VStack>
    <Text
      _dark={{
        color: "warmGray.50",
      }}
      color="coolGray.800"
      bold
    >
      {ws.name}
    </Text>
    {ws.user_profile !== null ? (
      <Text
        color="coolGray.600"
        _dark={{
          color: "warmGray.200",
        }}
      >
        {`${ws.user_profile.firstName} ${ws.user_profile.lastName} `}
      </Text>
    ) : (
      <Text
        color="coolGray.600"
        _dark={{
          color: "warmGray.200",
        }}
      >
        {`Non-associated employee`}
      </Text>
    )}
  </VStack>
  <Spacer />
</HStack>
</Accordion.Details> */}
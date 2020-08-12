import {StyleSheet} from 'react-native';
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  detailsButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  incident: {
    marginTop: 48,
    marginBottom: 16,
    padding: 24,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  incidentProperty: {
    fontSize: 14,
    color: "#41414d",
    fontWeight: "bold",
    marginTop: 24,
  },
  incidentValue: {
    marginTop: 8,
    fontSize: 20,
    color: "#737380",
  },
  contactBox: {
    padding: 24,
    borderRadius: 8,
    marginBottom: 16,
    backgroundColor: "#fff",
  },
  contactBoxTitle: {
    fontWeight: "bold",
    fontSize: 20,
    lineHeight: 30,
  },
  contactBoxInfo: {
    marginTop: 16,
    color: "#737380",
    fontSize: 15,
  },
  actions: {
      marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  // for some reason in physical device with width cant get the result, further test needed
  // min-width seems to work.
  // when add width: * , the button becomes compressed to the text
  // ruben forner
  action: {
    borderRadius: 8,
    minWidth: '48%',
    height: 50,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E02041",
  },
  actionText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
});
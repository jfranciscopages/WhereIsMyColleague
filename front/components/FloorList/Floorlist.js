import React, { useState, useEffect } from "react";
import { userById } from "../../store/usersReducer";
import {
    Box,
    Avatar,
    HStack,
    VStack,
    Text,
    Spacer,
    Accordion,
    Flex,
    Button,
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedFloor, setSelectedFloorId } from "../../store/floorReducer";
import axios from "axios";
import { singleBranch } from "../../store/BranchReducer";
import expoLocalHost from "../../localHost";
export default function FloorList() {
    const branch = useSelector((state) => state.branches.singleBranch);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();

    const singleBranchFloors = useSelector((state) => {
        return state.branches.singleBranch.floors;
    });

    useEffect(() => {
        setLoading(false);
    }, []);

    const goToUser = (id) => {
        dispatch(userById(id));
        navigation.navigate("userinfo");
    };
    const handlePressEditFloor = (value) => {
        console.log(value);
        dispatch(setSelectedFloorId(value));
        navigation.navigate("EditFloor");
    };
    const handlePressViewFloor = (value) => {
        console.log("VALUEEEE", value);
        dispatch(setSelectedFloor(value));
        navigation.navigate("floorDetails");
    };

    return (
        <Flex>
            <Accordion allowMultiple w="sm">
                {!loading ? (
                    branch.floors.map((floor, i) => {
                        return (
                            <Accordion.Item key={i}>
                                <Accordion.Summary>
                                    {floor.name}
                                    <Accordion.Icon />
                                </Accordion.Summary>
                                <Accordion.Details>
                                    <Button onPress={(value) => handlePressViewFloor(floor)}>
                                        Floor Details
                                    </Button>
                                    <Button onPress={(value) => handlePressEditFloor(floor.id)}>
                                        Edit Floor
                                    </Button>
                                </Accordion.Details>
                            </Accordion.Item>
                        );
                    })
                ) : (
                    <Accordion.Item></Accordion.Item>
                )}
            </Accordion>
        </Flex>
    );
}
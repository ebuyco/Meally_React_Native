import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import yelp from '../api/yelp';

interface FoodDetailScreenProps {
    route: {
        params: {
            id: string;
        }
    }
}

interface ResultProp {
    name: string;
    photos: string[];

}


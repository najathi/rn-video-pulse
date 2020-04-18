import React, { useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Video } from 'expo-av';
import { MaterialIcons } from '@expo/vector-icons';

import PulseWrap from '../components/PulseWrap';
import TouchableNative from '../components/TouchableNative';

const VideoPlay = props => {

	const [shouldPlay, setShouldPlay] = useState(false);
	const [openControl, setOpenControl] = useState(true);

	const handlePlayAndPause = () => {
		setShouldPlay(prev => !prev);
	}

	return (
		<View>
			<View style={styles.videoContainer}>
				<TouchableWithoutFeedback onPress={() => setOpenControl(prev => !prev)}>
					<Video
						source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
						rate={1.0}
						volume={1.0}
						resizeMode="cover"
						shouldPlay={shouldPlay}
						isLooping
						style={styles.video}
					/>
				</TouchableWithoutFeedback>
				{openControl ? <View
					style={styles.controlButton}>
					{!shouldPlay && <PulseWrap color='#5AFC04' numPulses={3} diameter={150} speed={20} duration={2000} />}
					<View style={styles.playButton}>
						<TouchableNative onPressed={handlePlayAndPause}>
							<MaterialIcons
								name={shouldPlay ? "pause" : "play-arrow"}
								size={45}
								color="black"
							/>
						</TouchableNative>
					</View>
				</View> : null}
			</View>
		</View >
	);
};

const styles = StyleSheet.create({
	video: {
		width: '100%',
		height: 213
	},
	controlBar: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		backgroundColor: "rgba(0, 0, 0, 0.5)",
	},
	videoContainer: {
		flexDirection: 'row',
		alignItems: "center",
		justifyContent: 'center',
	},
	controlButton: {
		position: 'absolute',
	},
	playButton: {
		backgroundColor: '#bbb',
		borderRadius: 50,
	}
});

export default VideoPlay;
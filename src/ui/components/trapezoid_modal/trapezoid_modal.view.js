import React, { memo } from 'react';
import { View, Modal, TouchableOpacity, Text } from 'react-native';
import BackArrow from '../../../../assets/svg/back_arrow.svg';

import { styles } from './trapezoid_modal.styles';
import PropTypes from 'prop-types';

const TrapezoidModal = memo(
  ({ isOpen = false, children, hasBackBtn = false, title, onClose }) => {
    return (
      <>
        <Modal animationType="slide" transparent={true} visible={isOpen}>
          <View style={styles.offsetContainer} />
          <View
            style={[
              styles.rotateContainer,
              { transform: [{ skewY: '20deg' }] },
            ]}
          />
          <View style={styles.contentContainer}>
            {hasBackBtn && (
              <TouchableOpacity
                style={styles.backArrowButton}
                onPress={onClose}>
                <BackArrow fill="black" width={20} height={20} />
              </TouchableOpacity>
            )}
            {title && <Text style={styles.modalTitle}>{title}</Text>}
            {children}
          </View>
        </Modal>
        {isOpen && <View style={styles.overlay} />}
      </>
    );
  },
);

TrapezoidModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.node,
  hasBackBtn: PropTypes.bool,
  isOpen: PropTypes.bool,
};

export { TrapezoidModal };

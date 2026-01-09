import React from 'react';
import { Document, Page, Text, View, StyleSheet, pdf } from '@react-pdf/renderer';
import { brandData, heroData, problemData, ideaData, experienceJourney, strategyPoints, agencyData, pricingTiers, pricingNote, closingData, permissionsData } from '../../data/mock';

// Styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#fffef2',
    padding: 40,
    fontFamily: 'Helvetica',
  },
  darkPage: {
    flexDirection: 'column',
    backgroundColor: '#333333',
    padding: 40,
    fontFamily: 'Helvetica',
  },
  heroPage: {
    flexDirection: 'column',
    backgroundColor: '#8b3a4c',
    padding: 50,
    fontFamily: 'Helvetica',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#bcbbb4',
  },
  logoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8b3a4c',
  },
  agencyText: {
    fontSize: 10,
    color: '#666666',
    letterSpacing: 1,
  },
  heroTitle: {
    fontSize: 42,
    fontWeight: 'normal',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 15,
  },
  heroSubtitle: {
    fontSize: 20,
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 10,
  },
  heroDescription: {
    fontSize: 14,
    color: '#ffffff',
    textAlign: 'center',
    maxWidth: 400,
    opacity: 0.8,
  },
  campaignInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  campaignItem: {
    fontSize: 11,
    color: '#ffffff',
    marginHorizontal: 10,
  },
  sectionLabel: {
    fontSize: 10,
    color: '#8b3a4c',
    letterSpacing: 2,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 28,
    color: '#333333',
    marginBottom: 20,
  },
  darkSectionTitle: {
    fontSize: 28,
    color: '#ffffff',
    marginBottom: 10,
  },
  accentText: {
    color: '#8b3a4c',
  },
  lightAccentText: {
    color: '#d4a5a5',
  },
  bodyText: {
    fontSize: 12,
    color: '#666666',
    lineHeight: 1.7,
  },
  whiteBodyText: {
    fontSize: 12,
    color: '#ffffff',
    lineHeight: 1.7,
  },
  problemPoint: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#bcbbb4',
  },
  bulletPoint: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#8b3a4c',
    marginRight: 15,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  gridItem: {
    width: '30%',
    backgroundColor: '#f6f5e8',
    padding: 15,
    marginRight: 10,
    marginBottom: 10,
  },
  gridItemTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 5,
  },
  gridItemText: {
    fontSize: 9,
    color: '#666666',
    lineHeight: 1.5,
  },
  journeyItem: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  journeyNumber: {
    width: 35,
    height: 35,
    backgroundColor: '#8b3a4c',
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  journeyNumberText: {
    color: '#ffffff',
    fontSize: 14,
  },
  journeyTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 3,
  },
  journeyText: {
    fontSize: 11,
    color: '#666666',
  },
  pricingRow: {
    flexDirection: 'row',
    marginTop: 20,
  },
  pricingCard: {
    width: '31%',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#bcbbb4',
    padding: 20,
    marginRight: 10,
  },
  pricingTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 5,
  },
  pricingDescription: {
    fontSize: 9,
    color: '#666666',
    marginBottom: 10,
  },
  pricingPrice: {
    fontSize: 22,
    color: '#333333',
    marginBottom: 12,
  },
  pricingFeature: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 6,
  },
  checkmark: {
    fontSize: 9,
    color: '#8b3a4c',
    marginRight: 6,
  },
  featureText: {
    fontSize: 9,
    color: '#666666',
    flex: 1,
  },
  serviceItem: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.1)',
    paddingVertical: 12,
  },
  serviceName: {
    fontSize: 14,
    color: '#ffffff',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  serviceDescription: {
    fontSize: 9,
    color: '#aaaaaa',
    lineHeight: 1.5,
  },
  permissionRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 15,
  },
  permissionCard: {
    width: '48%',
    backgroundColor: '#ffffff',
    padding: 12,
    marginRight: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#bcbbb4',
  },
  permissionTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 2,
  },
  permissionAuthority: {
    fontSize: 8,
    color: '#8b3a4c',
    marginBottom: 4,
  },
  permissionText: {
    fontSize: 8,
    color: '#666666',
  },
  closingTitle: {
    fontSize: 32,
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 8,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 40,
    right: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerText: {
    fontSize: 8,
    color: '#999999',
  },
  twoColumn: {
    flexDirection: 'row',
  },
  column: {
    flex: 1,
    paddingRight: 20,
  },
  statsRow: {
    flexDirection: 'row',
    marginTop: 25,
  },
  statItem: {
    marginRight: 30,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 28,
    color: '#333333',
  },
  statLabel: {
    fontSize: 10,
    color: '#666666',
  },
});

// PDF Document Component
const PitchDeckPDF = () => (
  <Document>
    {/* Page 1: Hero/Title */}
    <Page size="A4" orientation="landscape" style={styles.heroPage}>
      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontSize: 24, color: '#ffffff', fontWeight: 'bold', marginBottom: 30 }}>KARIBO</Text>
        <Text style={styles.heroTitle}>{heroData.headline}</Text>
        <Text style={styles.heroSubtitle}>{heroData.subheadline}</Text>
        <Text style={styles.heroDescription}>{heroData.description}</Text>
        <View style={styles.campaignInfo}>
          <Text style={styles.campaignItem}>{brandData.campaign.location}</Text>
          <Text style={styles.campaignItem}>•</Text>
          <Text style={styles.campaignItem}>{brandData.campaign.duration}</Text>
          <Text style={styles.campaignItem}>•</Text>
          <Text style={styles.campaignItem}>{brandData.campaign.period}</Text>
        </View>
        <Text style={{ fontSize: 10, color: '#ffffff', marginTop: 40, opacity: 0.6 }}>
          A Proposal by {brandData.agencyName}
        </Text>
      </View>
    </Page>

    {/* Page 2: The Problem */}
    <Page size="A4" orientation="landscape" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.logoText}>KARIBO</Text>
        <Text style={styles.agencyText}>× {brandData.agencyName}</Text>
      </View>
      
      <View style={styles.twoColumn}>
        <View style={styles.column}>
          <Text style={styles.sectionLabel}>THE CHALLENGE</Text>
          {problemData.points.map((point, index) => (
            <View key={index} style={styles.problemPoint}>
              <View style={styles.bulletPoint} />
              <Text style={{ fontSize: 13, color: '#666666' }}>{point}</Text>
            </View>
          ))}
        </View>
        <View style={styles.column}>
          <Text style={styles.sectionTitle}>
            {problemData.headline}
          </Text>
          <Text style={{ ...styles.sectionTitle, color: '#8b3a4c', marginTop: -15 }}>
            {problemData.headlineAccent}
          </Text>
          <Text style={styles.bodyText}>{problemData.description}</Text>
        </View>
      </View>
      
      <View style={styles.footer}>
        <Text style={styles.footerText}>{brandData.agencyName} | Confidential</Text>
        <Text style={styles.footerText}>2</Text>
      </View>
    </Page>

    {/* Page 3: The Concept */}
    <Page size="A4" orientation="landscape" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.logoText}>KARIBO</Text>
        <Text style={styles.agencyText}>× {brandData.agencyName}</Text>
      </View>
      
      <Text style={styles.sectionLabel}>THE CONCEPT</Text>
      <Text style={styles.sectionTitle}>{ideaData.headline}</Text>
      <Text style={{ ...styles.bodyText, maxWidth: 500, marginBottom: 30 }}>{ideaData.description}</Text>
      
      <View style={styles.statsRow}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>3</Text>
          <Text style={styles.statLabel}>Days</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>1</Text>
          <Text style={styles.statLabel}>Location</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>∞</Text>
          <Text style={styles.statLabel}>Memories</Text>
        </View>
      </View>
      
      <View style={styles.footer}>
        <Text style={styles.footerText}>{brandData.agencyName} | Confidential</Text>
        <Text style={styles.footerText}>3</Text>
      </View>
    </Page>

    {/* Page 4: Experience Journey */}
    <Page size="A4" orientation="landscape" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.logoText}>KARIBO</Text>
        <Text style={styles.agencyText}>× {brandData.agencyName}</Text>
      </View>
      
      <Text style={styles.sectionLabel}>THE JOURNEY</Text>
      <Text style={styles.sectionTitle}>The Experience Flow</Text>
      
      <View style={{ marginTop: 15 }}>
        {experienceJourney.map((item, index) => (
          <View key={index} style={styles.journeyItem}>
            <View style={styles.journeyNumber}>
              <Text style={styles.journeyNumberText}>{String(item.id).padStart(2, '0')}</Text>
            </View>
            <View>
              <Text style={styles.journeyTitle}>{item.title}</Text>
              <Text style={styles.journeyText}>{item.description}</Text>
            </View>
          </View>
        ))}
      </View>
      
      <View style={styles.footer}>
        <Text style={styles.footerText}>{brandData.agencyName} | Confidential</Text>
        <Text style={styles.footerText}>4</Text>
      </View>
    </Page>

    {/* Page 5: Strategy */}
    <Page size="A4" orientation="landscape" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.logoText}>KARIBO</Text>
        <Text style={styles.agencyText}>× {brandData.agencyName}</Text>
      </View>
      
      <Text style={styles.sectionLabel}>THE STRATEGY</Text>
      <Text style={styles.sectionTitle}>Why This Works</Text>
      
      <View style={styles.grid}>
        {strategyPoints.map((point, index) => (
          <View key={index} style={styles.gridItem}>
            <Text style={styles.gridItemTitle}>{point.title}</Text>
            <Text style={styles.gridItemText}>{point.description}</Text>
          </View>
        ))}
      </View>
      
      <View style={styles.footer}>
        <Text style={styles.footerText}>{brandData.agencyName} | Confidential</Text>
        <Text style={styles.footerText}>5</Text>
      </View>
    </Page>

    {/* Page 6: Our Role */}
    <Page size="A4" orientation="landscape" style={styles.darkPage}>
      <Text style={{ ...styles.sectionLabel, color: '#8b3a4c' }}>OUR ROLE</Text>
      <Text style={styles.darkSectionTitle}>{agencyData.headline}</Text>
      <Text style={{ ...styles.darkSectionTitle, color: '#d4a5a5', marginTop: -5 }}>{agencyData.headlineAccent}</Text>
      <Text style={{ ...styles.whiteBodyText, marginBottom: 20, opacity: 0.7 }}>{agencyData.description}</Text>
      
      <View>
        {agencyData.services.map((service, index) => (
          <View key={index} style={styles.serviceItem}>
            <Text style={styles.serviceName}>{service.name}</Text>
            <Text style={styles.serviceDescription}>{service.description}</Text>
          </View>
        ))}
      </View>
      
      <View style={styles.footer}>
        <Text style={{ ...styles.footerText, color: '#666666' }}>{brandData.agencyName} | Confidential</Text>
        <Text style={{ ...styles.footerText, color: '#666666' }}>6</Text>
      </View>
    </Page>

    {/* Page 7: Investment */}
    <Page size="A4" orientation="landscape" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.logoText}>KARIBO</Text>
        <Text style={styles.agencyText}>× {brandData.agencyName}</Text>
      </View>
      
      <Text style={styles.sectionLabel}>INVESTMENT</Text>
      <Text style={styles.sectionTitle}>Experience Tiers</Text>
      <Text style={{ ...styles.bodyText, marginBottom: 15, maxWidth: 500 }}>{pricingNote}</Text>
      
      <View style={styles.pricingRow}>
        {pricingTiers.map((tier, index) => (
          <View key={index} style={styles.pricingCard}>
            <Text style={styles.pricingTitle}>{tier.name}</Text>
            <Text style={styles.pricingDescription}>{tier.description}</Text>
            <Text style={styles.pricingPrice}>{tier.price}</Text>
            {tier.features.map((feature, fIndex) => (
              <View key={fIndex} style={styles.pricingFeature}>
                <Text style={styles.checkmark}>✓</Text>
                <Text style={styles.featureText}>{feature}</Text>
              </View>
            ))}
          </View>
        ))}
      </View>
      
      <View style={styles.footer}>
        <Text style={styles.footerText}>{brandData.agencyName} | Confidential</Text>
        <Text style={styles.footerText}>7</Text>
      </View>
    </Page>

    {/* Page 8: Permissions */}
    <Page size="A4" orientation="landscape" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.logoText}>KARIBO</Text>
        <Text style={styles.agencyText}>× {brandData.agencyName}</Text>
      </View>
      
      <Text style={styles.sectionLabel}>COMPLIANCE</Text>
      <Text style={styles.sectionTitle}>Permissions & Approvals</Text>
      <Text style={{ ...styles.bodyText, marginBottom: 10, maxWidth: 600 }}>{permissionsData.intro}</Text>
      
      <View style={styles.permissionRow}>
        {permissionsData.permissions.map((permission, index) => (
          <View key={index} style={styles.permissionCard}>
            <Text style={styles.permissionTitle}>{permission.title}</Text>
            <Text style={styles.permissionAuthority}>{permission.authority}</Text>
            <Text style={styles.permissionText}>{permission.description}</Text>
          </View>
        ))}
      </View>
      
      <View style={styles.footer}>
        <Text style={styles.footerText}>{brandData.agencyName} | Confidential</Text>
        <Text style={styles.footerText}>8</Text>
      </View>
    </Page>

    {/* Page 9: Closing */}
    <Page size="A4" orientation="landscape" style={styles.darkPage}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.closingTitle}>{closingData.headline}</Text>
        <Text style={{ ...styles.closingTitle, color: '#d4a5a5', marginTop: -5 }}>{closingData.headlineAccent}</Text>
        <Text style={{ ...styles.whiteBodyText, textAlign: 'center', maxWidth: 450, marginTop: 15, opacity: 0.8 }}>
          {closingData.description}
        </Text>
        
        <View style={{ marginTop: 50, alignItems: 'center' }}>
          <Text style={{ fontSize: 20, color: '#ffffff', fontWeight: 'bold', marginBottom: 10 }}>KARIBO</Text>
          <Text style={{ fontSize: 12, color: '#ffffff', opacity: 0.5 }}>× {brandData.agencyName}</Text>
        </View>
      </View>
      
      <View style={styles.footer}>
        <Text style={{ ...styles.footerText, color: '#666666' }}>{brandData.agencyName} | Confidential</Text>
        <Text style={{ ...styles.footerText, color: '#666666' }}>9</Text>
      </View>
    </Page>
  </Document>
);

// Function to generate and download PDF
export const generatePitchDeckPDF = async () => {
  try {
    const blob = await pdf(<PitchDeckPDF />).toBlob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Karibo_x_Carter_Road_Pitch_Deck_${brandData.agencyName}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error('PDF generation error:', error);
    throw error;
  }
};

export default PitchDeckPDF;

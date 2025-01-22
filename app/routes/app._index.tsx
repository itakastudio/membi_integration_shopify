// app/routes/app._index.tsx

import { Page, TextField, Card, BlockStack, Checkbox, Text, Layout, Button, InlineStack,
} from '@shopify/polaris';
import React, { useEffect, useState } from 'react';
import {
  LinkIcon
} from '@shopify/polaris-icons';

interface ShopifyMembiSettingResponse {
  tenant_host: string;
  fn_w_order_to_membi: boolean;
  fn_w_discount_to_membi: boolean;
  fn_discount_to_shopify: boolean;
}


export default function HomePage() {
  const [membiAccount, setMembiAccount] = useState('');
  const [webhookEnabled, setWebhookEnabled] = useState(false);
  const [discountCodeToMembiEnabled, setDiscountCodeToMembiEnabled] = useState(false);
  const [discountCodeFromMembiEnabled, setDiscountCodeFromMembiEnabled] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);


  useEffect(() => {
    fetchSettings();
  }, []); // Empty dependency array to run only once


  const fetchSettings = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const shop = urlParams.get('shop'); // Extract the shop parameter

    if (!shop) return;

    try {
      const response = await fetch(`http://localhost:3001/tenant/tenant_shopify_info/get_shopify_membi_setting?shop=${shop}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (response.ok) {
        const data: ShopifyMembiSettingResponse = await response.json();
        console.log('Successfully fetched settings:', data);

        // Update state with fetched settings
        setWebhookEnabled(data.fn_w_order_to_membi);
        setDiscountCodeToMembiEnabled(data.fn_w_discount_to_membi);
        setDiscountCodeFromMembiEnabled(data.fn_discount_to_shopify);
      } else {
        console.error('Failed to fetch settings:', response.statusText);
        alert('Failed to fetch settings. Please try again.');
      }
    } catch (error) {
      console.error('Error fetching settings:', error);
      alert('An error occurred. Please try again.');
    }
  };

  // Function to handle "Connect" button click
  const handleConnect = async () => {
    if (!membiAccount) return;

    const urlParams = new URLSearchParams(window.location.search);
    const shop = urlParams.get('shop'); // Extract the shop parameter

    setIsConnecting(true); // Show loading state for the button
    try {
      const response = await fetch('http://localhost:3001/tenant/tenant_shopify_info/shopify_membi_connection', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          membiAccount,
          shop
        }),
      });

      if (response.ok) {
        console.log('Successfully connected to Membi:', membiAccount);
        alert('Connection successful!');
      } else {
        console.error('Failed to connect to Membi:', response.statusText);
        alert('Failed to connect to Membi. Please try again.');
      }
    } catch (error) {
      console.error('Error connecting to Membi:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsConnecting(false); // Reset the loading state
    }
  };

  // Function to handle "Save" button click
  const handleSaveSettings = async () => {

    const urlParams = new URLSearchParams(window.location.search);
    const shop = urlParams.get('shop'); // Extract the shop parameter

    setIsSaving(true); // Show loading state for the button

    try {
      const response = await fetch('http://localhost:3001/tenant/tenant_shopify_info/shopify_membi_function_setting', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          shop,
          webhookEnabled,
          discountCodeToMembiEnabled,
          discountCodeFromMembiEnabled,
        }),
      });

      if (response.ok) {
        console.log('Settings saved successfully');
        alert('Settings saved successfully!');
      } else {
        console.error('Failed to save settings:', response.statusText);
        alert('Failed to save settings. Please try again.');
      }
    } catch (error) {
      console.error('Error saving settings:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSaving(false); // Reset the loading state
    }
  };

  return (
    <Page title="Membi Integration Settings">
      <Layout>
        {/* Input Field Section */}
        <Layout.Section>
          <Card>
            <BlockStack gap="200">
              <Text as="h2" variant="headingMd">
                Membi Account
              </Text>
              <Text as="span" variant="bodyMd">
                Please input the Membi account number that you want to connect.
              </Text>
              <InlineStack gap="200" align="start">
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', width: '100%' }}>
                <label>
                  Membi Account Number:
                </label>
                <div style={{ flexGrow: 1 }}>
                <TextField
                  label=""
                  value={membiAccount}
                  onChange={(value) => setMembiAccount(value)}
                  placeholder="Enter your Membi account number"
                  autoComplete="off"
                />
                </div>
              </div>
                <Button
                onClick={handleConnect}
                loading={isConnecting}
                disabled={!membiAccount}
                icon={LinkIcon}
                fullWidth
              >
                Connect
              </Button>
              </InlineStack>
            </BlockStack>
          </Card>
        </Layout.Section>

        {/* Toggle Buttons Section */}
        <Layout.Section>
          <Card>
            <BlockStack gap="500">
            <Text as="h2" variant="headingMd">
                Functionality Settings
              </Text>
              {/* Checkbox 1 */}
              <Checkbox
                label="Enable webhook Shopify order to Membi account"
                checked={webhookEnabled}
                onChange={(value) => setWebhookEnabled(value)}
              />

              {/* Checkbox 2 */}
              <Checkbox
                label="Enable discount code change to Membi"
                checked={discountCodeToMembiEnabled}
                onChange={(value) => setDiscountCodeToMembiEnabled(value)}
              />

              {/* Checkbox 3 */}
              <Checkbox
                label="Enable discount code change from Membi"
                checked={discountCodeFromMembiEnabled}
                onChange={(value) => setDiscountCodeFromMembiEnabled(value)}
              />

              {/* Save Button */}
              <Button loading={isSaving} onClick={handleSaveSettings} variant="primary">
                Save Settings
              </Button>
            </BlockStack>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
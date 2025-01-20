// 完成版面

// 想加入 function

// // app/routes/app._index.tsx

// import { Page, TextField, Card, BlockStack, Checkbox, Text, Layout, Button, InlineStack } from '@shopify/polaris';
// import React, { useState } from 'react';

// export default function HomePage() {
//   const [membiAccount, setMembiAccount] = useState('');
//   const [webhookEnabled, setWebhookEnabled] = useState(false);
//   const [discountCodeToMembiEnabled, setDiscountCodeToMembiEnabled] = useState(false);
//   const [discountCodeFromMembiEnabled, setDiscountCodeFromMembiEnabled] = useState(false);
//   const [isSaving, setIsSaving] = useState(false);

//   // Function to handle "Connect" button click
//   const handleConnect = () => {
//     console.log(`Attempting to connect Membi account: ${membiAccount}`);
//     // TODO: Write function to send the membiAccount value to your backend API
//   };

//   // Function to handle "Save" button click
//   const handleSaveSettings = () => {
//     setIsSaving(true);
//     console.log({
//       webhookEnabled,
//       discountCodeToMembiEnabled,
//       discountCodeFromMembiEnabled,
//     });

//     // TODO: Write function to save the checkbox states to your backend API

//     setTimeout(() => {
//       setIsSaving(false); // Simulate API call completion
//     }, 1000);
//   };

//   return (
//     <Page title="Membi Integration Settings">
//       <Layout>
//         {/* Input Field Section */}
//         <Layout.Section>
//           <Card>
//             <BlockStack gap="200">
//               <Text as="h2" variant="headingMd">
//                 Membi Account
//               </Text>
//               <Text as="span" variant="bodyMd">
//                 Please input the Membi account number that you want to connect.
//               </Text>
//               <InlineStack gap="200" align="center">
//                 <TextField
//                   label="Membi Account Number"
//                   value={membiAccount}
//                   onChange={(value) => setMembiAccount(value)}
//                   placeholder="Enter your Membi account number"
//                   autoComplete="off"
//                 />
//                 <Button onClick={handleConnect} disabled={!membiAccount}>
//                   Connect
//                 </Button>
//               </InlineStack>
//             </BlockStack>
//           </Card>
//         </Layout.Section>

//         {/* Toggle Buttons Section */}
//         <Layout.Section>
//           <Card>
//             <BlockStack gap="500">
//               <Text as="h2" variant="headingMd">
//                 Functionality Settings
//               </Text>

//               {/* Checkbox 1 */}
//               <Checkbox
//                 label="Enable webhook Shopify order to Membi account"
//                 checked={webhookEnabled}
//                 onChange={(value) => setWebhookEnabled(value)}
//               />

//               {/* Checkbox 2 */}
//               <Checkbox
//                 label="Enable discount code change to Membi"
//                 checked={discountCodeToMembiEnabled}
//                 onChange={(value) => setDiscountCodeToMembiEnabled(value)}
//               />

//               {/* Checkbox 3 */}
//               <Checkbox
//                 label="Enable discount code change from Membi"
//                 checked={discountCodeFromMembiEnabled}
//                 onChange={(value) => setDiscountCodeFromMembiEnabled(value)}
//               />

//               {/* Save Button */}
//               <Button loading={isSaving} onClick={handleSaveSettings} variant="primary">
//                 Save Settings
//               </Button>
//             </BlockStack>
//           </Card>
//         </Layout.Section>
//       </Layout>
//     </Page>
//   );
// }
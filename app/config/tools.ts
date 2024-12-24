export interface Tool {
  id: string;
  title: string;
  description: string;
  information: string;
  useCases: string[];
  component: React.ComponentType<any>;
}

export interface Category {
  id: string;
  name: string;
  tools: Tool[];
}

import NSLookup from '@/components/NSLookup';
import DomainToIP from '@/components/DomainToIP';
import Base64Tool from '@/components/Base64Tool';

export const categories: Category[] = [
  {
    id: 'dns-tools',
    name: 'DNS Tools',
    tools: [
      {
        id: 'nslookup',
        title: 'NS Lookup',
        description: 'Look up name server information for a domain',
        information: 'NS Lookup (Name Server Lookup) is a network administration tool used to query the Domain Name System (DNS) to obtain domain name or IP address mapping information. It helps in diagnosing DNS-related problems and verifying DNS records.',
        useCases: [
          "Troubleshooting email delivery issues",
          "Verifying DNS changes have propagated",
          "Identifying authoritative name servers for a domain",
          "Debugging network connectivity problems"
        ],
        component: NSLookup,
      },
      {
        id: 'domain-to-ip',
        title: 'Domain to IP',
        description: 'Convert a domain name to IP address',
        information: 'The Domain to IP tool resolves a domain name to its corresponding IP address(es). This process is fundamental to how the internet works, allowing human-readable domain names to be translated into machine-readable IP addresses that computers use to identify each other on a network.',
        useCases: [
          "Troubleshooting network connectivity issues",
          "Verifying server configurations",
          "Setting up firewall rules",
          "Bypassing DNS-based content filters"
        ],
        component: DomainToIP,
      },
    ],
  },
  {
    id: 'encoding-tools',
    name: 'Encoding/Decoding Tools',
    tools: [
      {
        id: 'base64',
        title: 'Base64 Encoder/Decoder',
        description: 'Encode or decode Base64 strings',
        information: 'Base64 is a binary-to-text encoding scheme that represents binary data in an ASCII string format. It\'s designed to carry data stored in binary formats across channels that only reliably support text content. Base64 is commonly used when there\'s a need to encode binary data that needs to be stored and transferred over media that are designed to deal with textual data.',
        useCases: [
          "Encoding binary data for inclusion in XML or JSON",
          "Embedding image data in CSS or HTML",
          "Encoding data in URL parameters",
          "Storing complex data structures in text-based databases"
        ],
        component: Base64Tool,
      },
    ],
  },
];


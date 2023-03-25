# Using third party library to generate invoice template
# This is for clients to be able to email invoices to customers when requested
from datetime import datetime, date, timedelta
from pyinvoice.models import InvoiceInfo, ServiceProviderInfo, ClientInfo, Item, Transaction
from pyinvoice.templates import SimpleInvoice

# This function is an exmaple from the docs
# Not used in production
# Kept in this file as an exmaple
def generateInvoice(invoice_number, supplier, customer, invoice_data ):
    
    # Generate file
    doc = SimpleInvoice(f'invoice {invoice_number}.pdf')
    doc.invoice_info = InvoiceInfo(1023, datetime.now(), datetime.now())  # Invoice info, optional

    # Service Provider Info, optional
    doc.service_provider_info = ServiceProviderInfo(
        name='PyInvoice',
        street='My Street',
        city='My City',
        state='My State',
        country='My Country',
        post_code='222222',
        vat_tax_number='Vat/Tax number'
    )

    # Client info, optional
    doc.client_info = ClientInfo(email='client@example.com')

    # Add Item
    doc.add_item(Item('Item', 'Item desc', 1, '1.1'))
    doc.add_item(Item('Item', 'Item desc', 2, '2.2'))
    doc.add_item(Item('Item', 'Item desc', 3, '3.3'))

    # Tax rate, optional
    doc.set_item_tax_rate(20)  # 20%

    # Transactions detail, optional
    doc.add_transaction(Transaction('Paypal', 111, datetime.now(), 1))
    doc.add_transaction(Transaction('Stripe', 222, date.today(), 2))

    # Optional
    doc.set_bottom_tip("Email: example@example.com<br />Don't hesitate to contact us for any questions.")

    doc.finish()
    
# This function is used in production    
def loadInvoiceTemplate(invoice_number, invoice_date, supplier_name, supplier_vat_number, customer_name, customer_email, days_due):
    
    # Generate template and fill in data from user db
    doc = SimpleInvoice(f'invoice {invoice_number}.pdf')
    doc.invoice_info = InvoiceInfo(invoice_number, invoice_date, datetime.now() + timedelta(days=days_due))
    doc.service_provider_info = ServiceProviderInfo(
        name=supplier_name,
        vat_tax_number=supplier_vat_number
    )
    doc.client_info = ClientInfo(name=customer_name, email=customer_email)
    # Return template for more info to be loaded/updated such as rows with data
    return doc

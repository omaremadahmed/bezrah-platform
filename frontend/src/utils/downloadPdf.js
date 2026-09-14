import { jsPDF } from 'jspdf'
import autoTable from 'jspdf-autotable'

const isMobile = () =>
  /Android|iPhone|iPad|iPod|Opera Mini|IEMobile/i.test(navigator.userAgent) ||
  (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)

export async function savePdfForDevice(doc, filename = 'Bezrah_Product_Catalogue.pdf') {
  try {
    doc.save(filename);
  } catch (error) {
    console.error('Download failed', error);
    throw error;
  }
}

export async function generateCataloguePdf(products = []) {
  const doc = new jsPDF('p', 'mm', 'a4')
  const pageWidth = doc.internal.pageSize.getWidth()

  doc.setFillColor(15, 76, 58)
  doc.rect(0, 0, pageWidth, 297, 'F')
  doc.setTextColor(255, 255, 255)
  doc.setFontSize(42)
  doc.text('BEZRAH', pageWidth / 2, 100, { align: 'center' })
  doc.setFontSize(14)
  doc.text('FOOD INDUSTRIES', pageWidth / 2, 115, { align: 'center' })
  doc.setFontSize(20)
  doc.text('Product Catalogue', pageWidth / 2, 160, { align: 'center' })
  doc.setFontSize(10)
  doc.text('From Seed to Market', pageWidth / 2, 175, { align: 'center' })
  doc.text(new Date().getFullYear().toString(), pageWidth / 2, 250, { align: 'center' })

  doc.addPage()
  doc.setTextColor(15, 76, 58)
  doc.setFontSize(22)
  doc.text('Our Products', pageWidth / 2, 25, { align: 'center' })
  doc.setDrawColor(15, 76, 58)
  doc.line(20, 30, pageWidth - 20, 30)

  const tableData = products.map((p, i) => [
    i + 1,
    p.name || p.name_ar || '-',
    p.categoryName || p.category || '-',
    p.packaging || '-',
    p.price_fob_piece || '-',
    p.price_fob_carton || '-'
  ])

  if (tableData.length) {
    autoTable(doc, {
      startY: 38,
      head: [['#', 'Product', 'Category', 'Packaging', 'FOB/Piece', 'FOB/Carton']],
      body: tableData,
      theme: 'grid',
      headStyles: { fillColor: [15, 76, 58], textColor: 255, fontSize: 10 },
      bodyStyles: { fontSize: 9 },
      alternateRowStyles: { fillColor: [245, 248, 246] },
      margin: { left: 14, right: 14 },
      styles: { cellPadding: 4 }
    })
  } else {
    doc.setFontSize(12)
    doc.setTextColor(100, 100, 100)
    doc.text('No products available at this time.', pageWidth / 2, 50, { align: 'center' })
  }

  const lastPage = doc.getNumberOfPages()
  doc.setPage(lastPage)
  doc.setFontSize(8)
  doc.setTextColor(150, 150, 150)
  doc.text('Bezrah Food Industries - www.bezrah.com', pageWidth / 2, 290, { align: 'center' })

  return doc
}
